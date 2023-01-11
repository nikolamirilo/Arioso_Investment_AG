import react from "@vitejs/plugin-react";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import generateSitemap from "vite-ssg-sitemap";

export default defineConfig({
  plugins: [
    react({
      runtimeHelpers: true,
    }),
    splitVendorChunkPlugin(),
  ],
  ssgOptions: {
    onFinished() {
      generateSitemap({ hostname: "https://arioso-investment.ch" });
    },
  },
  build: {
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    emptyOutDir: true,
  },
});
