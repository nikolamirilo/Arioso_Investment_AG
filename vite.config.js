import react from "@vitejs/plugin-react";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react({
      runtimeHelpers: true,
    }),
    splitVendorChunkPlugin(),
    Sitemap(),
  ],
  build: {
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    emptyOutDir: true,
  },
});
