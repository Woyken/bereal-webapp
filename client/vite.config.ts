import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import basicSsl from "@vitejs/plugin-basic-ssl";
import linaria from "@linaria/vite";

export default defineConfig({
  base: "./",
  plugins: [linaria(), basicSsl(), solidPlugin()],
  server: {
    https: true,
    port: 3001,
  },
  build: {
    target: "esnext",
  },
  preview: {
    port: 3001,
  },
});
