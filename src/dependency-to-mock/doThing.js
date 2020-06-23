export const doThing = () => {
  throw new Error('I should not get invoked by a test!')
}