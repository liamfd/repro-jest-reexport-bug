jest.mock('../../shared/doThing');

const actual = jest.requireActual('../index');

// use a commonjs export so this object is treated as a set of named exports
module.exports = {
  callDoThing: actual.callDoThing,
};
