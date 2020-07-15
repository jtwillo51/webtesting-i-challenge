module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(...specs) {
  if (specs.length != 3) {
    throw "Missing information!";
  }
  item = {
    name: specs[0],
    durability: specs[1],
    enhancement: specs[2],
  };

  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  } else if (item.enhancement >= 15) {
    return { ...item, durability: item.durability - 10 };
  } else if (item.enhancement > 16) {
    return {
      ...item,
      enhancement: item.enhancement - 1,
      durability: item.durability - 10,
    };
  } else {
    return { ...item };
  }
}

function repair({ item }) {
  item = {
    durability: 100,
  };
  return { ...item };
}

function get(item) {
  return { ...item };
}
