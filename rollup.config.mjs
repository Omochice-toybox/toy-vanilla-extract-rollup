import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin"

export default {
  input: "dist/main.js",
  output: {
    file: "bundle.js",
    format: "umd",
  },
  plugins: [
    vanillaExtractPlugin()
  ]
}
