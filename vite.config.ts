/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    react({
      babel: {
        plugins: [
          "@vanilla-extract/babel-plugin",
          [
            "effector/babel-plugin",
            {
              factories: [
                "~/shared/factories/create_counter",
                "@effector/reflect",
                "@effector/reflect/ssr",
                "patronum",
              ],
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
  },
});
