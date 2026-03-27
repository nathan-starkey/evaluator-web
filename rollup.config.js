import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const isDev = process.env.ROLLUP_WATCH == "true";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "esm",
  },
  plugins: [
    typescript(),
    serve({ open: true, contentBase: ["public", "dist"] }),
    ...(isDev ? [livereload()] : []),
  ],
};
