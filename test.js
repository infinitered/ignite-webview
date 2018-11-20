/**
 * Super simple testing.
 */

const NPM_NAME = "react-native-webview";

const { add, remove } = require("./plugin.js");

const assert = console.assert;

assert(typeof add === "function", "Plugin should export an `add` function");
assert(typeof remove === "function", "Plugin should export a `remove` fn");

const mockedContext = {
  ignite: {
    addModule: async (modName, options) => {
      // prettier-ignore
      assert(modName === NPM_NAME, `Wrong NPM name in add function: ${modName}`);
    },
    removeModule: async (modName, options) => {
      // prettier-ignore
      assert(modName === NPM_NAME, `Wrong NPM name in remove function: ${modName}`);
    }
  }
};

// Test the functions with mocked context
add(mockedContext).then(() => {});
remove(mockedContext).then(() => {});

console.info("Tests passed successfully.");
