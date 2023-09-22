import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";
import typescript from "@rollup/plugin-typescript";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: "src/main.ts",
  output: {
    file: "dist/main.js",
    format: "es",
  },
  plugins: [vanillaExtractPlugin(), typescript()],
};

export default config;
