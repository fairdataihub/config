const devmojiConfig = require("./src/data/commitInfo.json");

const types = [];

for (const item of devmojiConfig.types) {
  types.push(item.code);
}
const config = {
  types,
  devmoji: devmojiConfig.types,
};

module.exports = config;
