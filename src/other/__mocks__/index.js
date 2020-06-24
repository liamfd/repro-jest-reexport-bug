console.log('in', __filename);

jest.mock('../../shared/doThing', () => {
  console.log('mocking shared/doThing')
  return {doThing: jest.fn()}
});


const actual = jest.requireActual('../index');

// use a commonjs export so this object is treated as a set of named exports
module.exports = {
  callDoThing: actual.callDoThing,
};
