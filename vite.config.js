import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = env.VITE_SITE_URL || env.SITE_URL || "";

  return {
    plugins: [
      {
        name: "inject-site-url",
        transformIndexHtml(html) {
          if (!siteUrl) return html;
          const canonical = `<link rel="canonical" href="${siteUrl}" />`;
          const ogUrl = `<meta property="og:url" content="${siteUrl}" />`;
          if (html.includes('rel="canonical"')) return html;
          return html.replace(
            "<meta property=\"og:site_name\"",
            `${canonical}\n    ${ogUrl}\n    <meta property="og:site_name"`
          );
        },
      },
    ],
  };
});
