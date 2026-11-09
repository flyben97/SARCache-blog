import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({ base: "/SARCache-blog/", plugins: [react()], build: { copyPublicDir: true } });
