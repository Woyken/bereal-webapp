import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  base: './',
  plugins: [basicSsl(), solidPlugin()],
  server: {
    https: true,
    host: true,
    port: 3001,
  },
  build: {
    target: "esnext",
  },
  preview:{
    port: 3001,
  }
});
