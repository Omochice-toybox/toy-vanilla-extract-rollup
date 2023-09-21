import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: "dist/main.js",
  output: {
    file: "out/bundle.js",
    format: "es",
  },
  plugins: [vanillaExtractPlugin()],
};

export default config;
