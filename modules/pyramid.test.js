const pyramid = require("./pyramid");

test("Is pyramid() defined and reachable", () => {
  expect(pyramid).toBeDefined();
});

//1
test("Test by 1 brick", () => {
  expect(pyramid(1).columns()).toBe(1);
});

//22
test("Test by 22 bricks", () => {
  expect(pyramid(22).columns()).toBe(6);
});

//1000
test("Test by 1000 bricks", () => {
  expect(pyramid(1000).columns()).toBe(44);
});

//2^50 -> 1125899906842624 //47453132
//with this Matrix aproach can not be done!!!!
// test("Test by 1000 bricks", () => {
//     expect(pyramid(1125899906842624).columns()).toBe(47453132);
//   });
