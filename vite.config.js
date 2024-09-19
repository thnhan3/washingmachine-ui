import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  server: {
    proxy: {
      "/api": {
        target: "https://washingmachine-8zdc.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
