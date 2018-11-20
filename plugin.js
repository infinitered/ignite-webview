const NPM_MODULE_NAME = "react-native-webview";

/**
 * Add the NPM package and link it.
 */
const add = async context => {
  const { ignite } = context;

  await ignite.addModule(NPM_MODULE_NAME, { version: "2.5.0", link: true });
};

/**
 * Unlink and remove the NPM package.
 */
const remove = async context => {
  const { ignite } = context;

  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true });
};

module.exports = { add, remove };
