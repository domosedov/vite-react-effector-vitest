/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const resolveAliases = [
    {
      find: /~/,
      replacement: path.resolve(__dirname, "./src"),
    },
  ];

  if (mode === "test") {
    resolveAliases.push({
      find: /^effector-react$/,
      replacement: "effector-react/scope",
    });
    resolveAliases.push({
      find: /^@effector\/reflect$/,
      replacement: "@effector/reflect/ssr",
    });
  }

  return {
    plugins: [
      react({
        babel: {
          plugins: [
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
      alias: resolveAliases,
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./test/setup.ts",
    },
  };
});
