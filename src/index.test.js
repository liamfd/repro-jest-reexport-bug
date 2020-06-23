import { doThing as doThingMock } from './dependency-to-mock/reexportDoThing';

jest.mock('./dependency-to-mock/doThing');

test('does thing', () => {
  doThingMock('foo')
  expect(doThingMock).toHaveBeenCalledWith('foo');
})
