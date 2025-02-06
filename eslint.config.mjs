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
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      "@typescript-eslint/no-explicit-any": "off",  // ✅ Allow 'any'
      "@typescript-eslint/no-unused-vars": "off",   // ✅ Disable the unused vars rule
      "react-hooks/exhaustive-deps": "off",         // ✅ Enable 'react-hooks/exhaustive-deps' rule
    },
  },
];

export default eslintConfig;