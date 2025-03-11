import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikReact } from "@builder.io/qwik-react/vite";
// https://vite.dev/config/

export default defineConfig({
  plugins: [
    qwikVite({
      csr: true,
    }),
    qwikReact(),
  ],
});
