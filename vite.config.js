import react from "@vitejs/plugin-react";
import { defineConfig, splitVendorChunkPlugin } from "vite";

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  build: {
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    emptyOutDir: true,
  },
});
