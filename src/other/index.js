// this will break if broken.test.ts is also specified like this:
import { doThing } from '../shared';

// this will fix the bug
// import { doThing } from '../shared/doThing'; // works

export const callDoThing = () => {
  doThing();
  return 'bar';
};
