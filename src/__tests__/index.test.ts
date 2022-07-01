import test from "ava";

import devmojiJSON from "../data/commitInfo.json";

import { devmojiConfig } from "../index";

test("devmoji()", (t) => {
  const allTypes: string[] = [];

  for (const item of devmojiJSON.types) {
    allTypes.push(item.code);
  }

  const { types, devmoji } = devmojiConfig("default");

  t.deepEqual(types, allTypes);
  t.deepEqual(devmoji, devmojiJSON.types);

  // t.is(devmoji, devmojiJSON.types);
});
