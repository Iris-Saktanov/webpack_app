import { BuildOptions } from "../types/types";
import { removeDataTestidBabelPlugin } from "./removeDataTestidBabelPlugin";

export function buildBabelLoader(options: BuildOptions) {
  const isDev = options.mode === "development";
  const isProd = options.mode === "production";

  const plugins = [];

  if (isProd) {
    plugins.push([
      removeDataTestidBabelPlugin,
      {
        props: ["data-testid"],
      },
    ]);
  }
  return {
    test: /\.tsx?$/,
    use: [
      {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-typescript",
            [
              "@babel/preset-react",
              { runtime: isDev ? "automatic" : "classic" },
            ],
          ],
          plugins: plugins.length ? plugins : undefined,
        },
      },
    ],
    exclude: /node_modules/,
  };
}
