const DEFAULT_PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.matchvibe.app&hl=en_IN";

const CRAWLER_UA =
  /facebookexternalhit|facebot|meta-externalagent|meta-externalfetcher|meta-webindexer|twitterbot|slackbot|linkedinbot|discordbot|googlebot|bingbot|bot|crawler|spider|preview/i;

const IN_APP_UA = /whatsapp|telegram|instagram|fbav|fban/i;

function isMessagingPreview(ua) {
  return /whatsapp|telegram/i.test(ua) && !/mozilla/i.test(ua);
}

function isCrawler(ua) {
  return CRAWLER_UA.test(ua) || isMessagingPreview(ua);
}

function isInAppBrowser(ua) {
  return IN_APP_UA.test(ua) && /mozilla/i.test(ua);
}

function rewriteTo(path, requestUrl) {
  const destination = new URL(path, requestUrl);
  return new Response(null, {
    status: 200,
    headers: {
      "x-middleware-rewrite": destination.pathname,
    },
  });
}

export default function middleware(request) {
  const ua = request.headers.get("user-agent") || "";
  const url = new URL(request.url);
  const playStore = process.env.PLAY_STORE_URL || DEFAULT_PLAY_STORE;

  const hasFbclid = url.searchParams.has("fbclid");
  const hasGoParam = url.searchParams.get("go") === "1";

  if (isCrawler(ua)) {
    return rewriteTo("/amazon-bot.html", request.url);
  }

  if (hasFbclid || isInAppBrowser(ua) || hasGoParam) {
    return Response.redirect(playStore, 302);
  }

  return rewriteTo("/amazon-bot.html", request.url);
}

export const config = {
  matcher: ["/", "/index.html"],
};
