import react from "@vitejs/plugin-react";
import { defineConfig, splitVendorChunkPlugin } from "vite";

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    emptyOutDir: true,
  },
});
