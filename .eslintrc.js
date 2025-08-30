module.exports = {
  extends: ["next", "next/core-web-vitals"],
  ignorePatterns: ["node_modules/", ".next/", "out/", "src/generated/**", "prisma/**"],
  rules: {
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-object-type": "off",
  },
  ignorePatterns: ["src/generated/**"], // ignore generated
};

module.exports = {
  extends: ["next", "next/core-web-vitals"],
  ignorePatterns: ["src/generated/**", "prisma/**"],
  rules: {
    // your custom rules here
  },
};
