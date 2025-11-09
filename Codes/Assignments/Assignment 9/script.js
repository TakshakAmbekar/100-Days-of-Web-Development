const obj = { name: "Prakash", age: 111, hairColor: "black", likes: "food" };

const inverted = Object.fromEntries(  // converts array to object
  Object.entries(obj) // converts object into array of key-value pairs
  .map(([key, value]) => [value, key])  // swap key and value in each pair
);

console.log(inverted);

// working of fromEntries
// console.log(Object.fromEntries([[1, "one"], [2, "two"]]));
