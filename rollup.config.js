import { terser } from "rollup-plugin-terser";

module.exports = {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs"
  },
  plugins: [terser()]
};