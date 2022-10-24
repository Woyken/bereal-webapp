import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import basicSsl from "@vitejs/plugin-basic-ssl";
import suidPlugin from "@suid/vite-plugin";

export default defineConfig({
  plugins: [basicSsl(), suidPlugin(), solidPlugin()],
  server: {
    https: true,
    port: 3001,
  },
  build: {
    target: "esnext",
  },
});
