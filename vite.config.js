import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
  },
  proxy: {
    "/api": "https://localapi-unitycrm.reservation-system.net/api/",
    changeOrigin: true,
    secure: false, 
  },
});
