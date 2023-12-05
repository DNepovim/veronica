module.exports = {
  extends: ["next/core-web-vitals", "prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        plugins: ["prettier-plugin-tailwindcss"],
      },
    ],
  },
};
