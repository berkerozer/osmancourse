const user = {
  name: "John",
  age: 30,
  mail: "johndoe@example.com",
  add: (a, b) => a + b,
};

const { add, age, name } = user;

// console.log(age);
// console.log(add(2, 3));
// console.log(name);

const db = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];

console.log(db[0].name);

const [, user2] = db;

console.log(user2.name);
