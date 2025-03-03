import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  format: ["cjs", "esm"],
  entry: ["./src/index.ts"],
  dts: true,
  external: ["react"],
  ...options,
}));
