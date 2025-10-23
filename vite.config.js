import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        icon: true,
      },
      include: "**/*.svg?react",
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["nutrition-plan.ico"],
      manifest: {
        name: "Plan Nutricional - Johan Meza",
        short_name: "Plan Nutricional",
        description:
          "Aplicación PWA para gestionar tu minuta semanal nutricional",
        theme_color: "#607AFB",
        background_color: "#f5f6f8",
        display: "standalone",
        display_override: ["window-controls-overlay", "standalone"],
        scope: "/",
        start_url: "/",
        orientation: "portrait-primary",
        categories: ["health", "lifestyle", "productivity"],
        icons: [
          {
            src: "nutrition-plan.ico",
            sizes: "192x192",
            type: "image/x-icon",
            purpose: "any",
          },
          {
            src: "nutrition-plan.ico",
            sizes: "512x512",
            type: "image/x-icon",
            purpose: "any",
          },
          {
            src: "nutrition-plan.ico",
            sizes: "512x512",
            type: "image/x-icon",
            purpose: "maskable",
          },
        ],
        shortcuts: [
          {
            name: "Ver plan de hoy",
            short_name: "Hoy",
            description: "Ver el plan nutricional de hoy",
            url: "/",
            icons: [{ src: "nutrition-plan.ico", sizes: "192x192" }],
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "google-fonts-stylesheets",
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 año
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
});
