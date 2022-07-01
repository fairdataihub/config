export function defaultReleaseConfig(
  orgName: string,
  repoName: string,
  npmPublish: boolean
): object {
  const config = {
    branches: [
      "+([0-9])?(.{+([0-9]),x}).x",
      "main",
      "master",
      "next",
      "next-major",
      {
        name: "beta",
        prerelease: true,
      },
      {
        name: "alpha",
        prerelease: true,
      },
    ],
    repositoryUrl: `https://github.com/${orgName}/${repoName}.git`,
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      [
        "@semantic-release/npm",
        {
          npmPublish,
        },
      ],
      "@semantic-release/github",
      "@semantic-release/git",
    ],
  };

  return config;
}
