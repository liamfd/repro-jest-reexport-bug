# Repro Jest Re-Export Bug (?)

This repo is intended to provide a minimal repro case for some unusual behavior I've encountered with Jest involving module mocks and re-exporting functions.

To see it, run:

```js
yarn test
```

The tests should fail with an error like: "I should not be called". If you go to `src/broken.test.js` and play around with the import options, you'll see that the tests pass after making seemingly benign changes. You can also get the tests to pass by doing the same in `src/other/index.js`.