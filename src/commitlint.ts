import devmoji from "./data/commitInfo.json";

export function defaultCommitlintConfig(): object {
  const types = [];

  for (const item of devmoji.types) {
    types.push(item.code);
  }

  const scopes = [
    "app",
    "library",
    "backend",
    "authentication",
    "settings",
    "deps",
  ];

  return {
    extends: ["@commitlint/config-conventional"],
    rules: {
      "type-enum": [2, "always", types],
      "scope-case": [2, "always", ["camel-case"]],
      "scope-enum": [2, "always", scopes],
      "subject-empty": [2, "never"],
      "subject-case": [2, "always", ["lower-case"]],
      "header-max-length": [2, "always", 72],
    },
  };
}
