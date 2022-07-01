type config = {
  env?: {
    [key: string]: boolean;
  };
  extends: string[];
  globals?: {
    [key: string]: string;
  };
  parserOptions?: {
    ecmaVersion: number;
    sourceType: string;
    parser: string;
  };
  plugins: string[];
  rules: {
    [key: string]: string | number | boolean | object;
  };
  overrides?: {
    files: string;
    plugins: string[];
    extends: string[];
    rules: {
      [key: string]: string | number | boolean | object;
    };
    parser: string;
  }[];
};

export function vue(): config {
  return {
    env: {
      es6: true,
      node: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:vue/essential",
      "plugin:prettier/recommended",
    ],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
    },
    parserOptions: {
      parser: "@babel/eslint-parser",
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: ["vue", "prettier"],
    rules: {
      "no-unused-vars": [2, { args: "all", argsIgnorePattern: "^_" }],
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          printWidth: 100,
        },
      ],
    },
  };
}

export function vue_storybook(): config {
  const config = vue();

  config.extends.push("plugin:storybook/recommended");

  return config;
}

export function nextjs(): config {
  return {
    plugins: ["prettier"],
    extends: ["next", "next/core-web-vitals", "prettier"],
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      camelcase: "off",
      "import/prefer-default-export": "off",
      "react/jsx-filename-extension": "off",
      "react/jsx-props-no-spreading": "off",
      "react/no-unused-prop-types": "off",
      "react/require-default-props": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
          tsx: "never",
          js: "never",
          jsx: "never",
        },
      ],
      quotes: "off",
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["hrefLeft", "hrefRight"],
          aspects: ["invalidHref", "preferButton"],
        },
      ],
    },
    overrides: [
      {
        files: "**/*.+(ts|tsx)",
        parser: "@typescript-eslint/parser",
        plugins: ["@typescript-eslint/eslint-plugin"],
        extends: ["plugin:@typescript-eslint/recommended", "prettier"],
        rules: {
          "@typescript-eslint/explicit-function-return-type": "off",
          "@typescript-eslint/explicit-module-boundary-types": "off",
          "no-use-before-define": [0],
          "@typescript-eslint/no-use-before-define": [1],
          "@typescript-eslint/no-explicit-any": "off",
          "@typescript-eslint/no-var-requires": "off",
          "@typescript-eslint/quotes": [
            2,
            "backtick",
            {
              avoidEscape: true,
            },
          ],
        },
      },
    ],
  };
}
