import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import preact from "@astrojs/preact"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://daliondev.online/",
  integrations: [
    tailwind(),
    preact({
      compat: true,
    }),
    sitemap(),
  ],
})
