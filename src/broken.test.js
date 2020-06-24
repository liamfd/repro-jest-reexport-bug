// this will break (assuming other/index.js is also specified like this):
import { doThing } from './shared';
import { callDoThing } from './other';

// This will work:
// import { callDoThing } from './other';

// This will work:
// import { doThing } from './shared/doThing';
// import { callDoThing } from './other';

// This will work:
// import { callDoThing } from './other';
// import { doThing } from './shared';

jest.mock('./other');

it('should cancel Human API Connect requests after 10 days, then post to Slack', () => {
  expect(callDoThing({})).toEqual('bar');
});
