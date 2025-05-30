import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      // Disable the rule for using "any"
      "@typescript-eslint/no-explicit-any": "off",

      // Disable the rule for unused variables (can also be set to "warn" instead of "off")
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;