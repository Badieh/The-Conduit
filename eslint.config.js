import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // "import/default": "off",
      // "import/no-named-as-default-member": "off",
      // "import/no-named-as-default": "off",
      // "react/react-in-jsx-scope": "off",
      // "jsx-a11y/anchor-is-valid": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      // "@typescript-eslint/explicit-function-return-type": ["off"],
      // "@typescript-eslint/explicit-module-boundary-types": ["off"],
      // "@typescript-eslint/no-empty-function": ["off"],
      // "@typescript-eslint/no-explicit-any": ["off"],
      "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    },
  }
);
