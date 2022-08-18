import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import vue from "rollup-plugin-vue";
import { terser } from "rollup-plugin-terser";
import del from "rollup-plugin-delete";

export default [
  {
    input: "./index.js",
    output: [
      {
        file: "./lib/index.umd.js",
        format: "umd",
        name: "vc-image",
      },
      {
        file: "./lib/index.es.js",
        format: "es",
      },
    ],
    plugins: [
      del({ targets: ["lib/*"] }),
      vue(),
      babel({
        exclude: "node_modules/**",
        runtimeHelpers: true,
      }),
      commonjs(),
      terser(),
    ],
  },
];
