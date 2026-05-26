const BOT_UA =
  /bot|crawler|spider|facebookexternalhit|twitterbot|whatsapp|telegram|slack|linkedin|discord|preview|googlebot|bingbot|pinterest|embedly|quora link preview/i;

export function isPreviewBot() {
  return BOT_UA.test(navigator.userAgent);
}
