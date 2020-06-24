console.error('in', __filename);

export const doThing = () => {
  throw new Error('I should not be called');
};
