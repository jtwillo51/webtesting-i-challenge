const enhancer = require("./enhancer.js");
// test away!
const item = {
  name: "iron sword",
  durability: 25,
  enhancement: 15,
};

test("repair", () => {
  expect(enhancer.repair(item)).toEqual({ durability: 100 });
  expect(enhancer.repair(item)).toEqual({ durability: 100 });
});

test("success", () => {
  expect(enhancer.succeed("silver sword", 83, 15)).toEqual({
    name: "silver sword",
    durability: 83,
    enhancement: 15,
  });
  // works as expected, comment in to show
  //   expect(
  //     enhancer.succeed("silver sword",  15 )
  //   ).toThrow();
});

test("fail", () => {
  expect(enhancer.fail(item)).toEqual({
    name: "iron sword",
    durability: 15,
    enhancement: 15,
  });
});
