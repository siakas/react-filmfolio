import eslintPluginNext from "@next/eslint-plugin-next";
import pluginQuery from "@tanstack/eslint-plugin-query";
import biome from "eslint-config-biome";
import importPlugin from "eslint-plugin-import";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import tailwind from "eslint-plugin-tailwindcss";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
  },
  {
    ignores: [
      "**/node_modules/",
      "**/.next/",
      "**/.nuxt/",
      "**/.astro/",
      "**/build/",
      "**/dist/",
      "**/out/",
      "**/public/",
      "**/package-lock.json",
      "**/yarn.lock",
      "**/pnpm-lock.yaml",
      "**/vite.config.ts",
      "**/next.config.js",
      "**/tsconfig.json",
      "src/env.d.ts",
      "**/*.cjs",
      "**/*.mjs",
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
  ...tailwind.configs["flat/recommended"],
  ...pluginQuery.configs["flat/recommended"],
  {
    rules: {
      "object-shorthand": "error",
    },
  },
  {
    files: ["**/*.{,c,m}{j,t}s{,x}"],
    ...importPlugin.flatConfigs.recommended,
    rules: {
      "import/newline-after-import": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "{react,next,next/**}",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "parent",
              position: "before",
            },
          ],
          "newlines-between": "never",
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    plugins: {
      tailwindcss: tailwind,
    },
    rules: {
      "tailwindcss/no-custom-classname": "off",
    },
  },
  {
    ...eslintPluginReact.configs.flat.recommended,
    ...eslintPluginReact.configs.flat["jsx-runtime"],
    plugins: {
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "@next/next": eslintPluginNext,
    },
    rules: {
      ...eslintPluginReact.configs["jsx-runtime"].rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginNext.configs.recommended.rules,
      ...eslintPluginNext.configs["core-web-vitals"].rules,
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/display-name": "off",
      "react/jsx-curly-brace-presence": "error",
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: false,
        },
      ],
      "@next/next/no-img-element": "off",
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  biome,
];
