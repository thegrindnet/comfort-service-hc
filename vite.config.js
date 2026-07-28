import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/comfort-service-hc/",
  server: {
    port: 5173,
  },
});
