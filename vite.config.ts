import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080, // Let Vite use default
    proxy: {
      "/api": "http://localhost:3001", // Proxy API requests to backend
    },
  },
  plugins: [mdx(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
