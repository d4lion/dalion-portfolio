import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import preact from "@astrojs/preact"
import vercel from "@astrojs/vercel/serverless"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://d4lion.site/",
  output: "server",
  adapter: vercel(),
  integrations: [
    tailwind(),
    preact({
      compat: true,
    }),
    sitemap(),
  ],
})
