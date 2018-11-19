const NPM_MODULE_NAME = "react-native-webview";

/**
 * Add the NPM package and configure it.
 */
const add = async context => {
  const { ignite } = context;

  await ignite.addModule(NPM_MODULE_NAME, { version: "2.5.0", link: true });

  // we need some sort of example, probably?
};

const remove = async context => {
  const { ignite } = context;

  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true });

  // remove the example?
};

module.exports = { add, remove };
