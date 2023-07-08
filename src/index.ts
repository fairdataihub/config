import { defaultCommitlintConfig } from "./commitlint";
import { defaultDevmojiConfig } from "./devmoji";
import { nextjs, vue, vue_storybook } from "./eslint";
import { defaultPrettierConfig } from "./prettier";
import { defaultReleaseConfig } from "./releaserc";

export function prettierConfig(type = "default"): object {
  if (type === "default") {
    return defaultPrettierConfig();
  }
  return {};
}

export function eslintConfig(type: string): object {
  if (type === "nextjs") {
    return nextjs();
  }
  if (type === "vue") {
    return vue();
  }
  if (type === "vue_storybook") {
    return vue_storybook();
  }
  return {};
}

type DevmojiConfig = {
  code: string;
  gitmoji: string;
  description: string;
}[];

type ReturnConfig = {
  types?: string[];
  devmoji?: DevmojiConfig;
};

export function devmojiConfig(type = "default"): ReturnConfig {
  if (type === "default") {
    return defaultDevmojiConfig();
  }
  return {};
}

export function commitlintConfig(type = "default"): object {
  if (type === "default") {
    const config = defaultCommitlintConfig();
    return config;
  }
  return {};
}

export function releasercConfig(
  type = "default",
  orgName: string,
  repoName: string,
  npmPublish = false,
): object {
  if (type === "default") {
    return defaultReleaseConfig(orgName, repoName, npmPublish);
  }
  return {};
}
