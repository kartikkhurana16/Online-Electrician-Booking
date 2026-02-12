import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";



export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    base:process.env.VITE_BASE_PATH || "/Online-Electrician-Booking"
  }
});
