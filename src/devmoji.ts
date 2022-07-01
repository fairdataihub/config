import devmoji from "./data/commitInfo.json";

type DevmojiConfig = {
  code: string;
  gitmoji: string;
  description: string;
}[];

type ReturnConfig = {
  types: string[];
  devmoji: DevmojiConfig;
};

export function defaultDevmojiConfig(): ReturnConfig {
  const types: string[] = [];

  for (const item of devmoji.types) {
    types.push(item.code);
  }

  const config = {
    types,
    devmoji: devmoji.types,
  };

  return config;
}
