import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const INPUT_NAME = "index.mjs";
const OUTPUT_NAME = "vicis-transform-date";
const UMD_NAME = "VicisTransformDate";

export default {
  input: `./src/${INPUT_NAME}`,
  output: [
    {
      file: `./dist/${OUTPUT_NAME}.js`,
      format: "umd",
      globals: { moment: "moment" },
      name: UMD_NAME,
      sourcemap: true,
    },
  ],
  plugins: [
    babel({ babelrc: true }),
    resolve(),
    commonjs(),
    terser({
      sourcemap: true,
      warnings: true,
      keep_classnames: true,
      keep_fnames: true,
    }),
  ],
  external: ["moment"],
};
