const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const add = (a, b) => {
  return a + b;
};

const add2 = function (a, b) {
  return a + b;
};

const add3 = (a, b) => a + b;

// console.log(add(2, 3));
// console.log(add2(2, 3));
// console.log(add3(2, 3));

// arr.forEach((i) => console.log(i + 2));

// arr.forEach(function (i) {
//   console.log(i + 2);
// });

// arr.forEach((i) => {
//   console.log(i + 2);
// });

// const arr2 = arr.forEach((i) => {
//   return i + 2;
// });

// const arr2 = arr.map((i) => {
//   return i + 2;
// });

const arr2 = arr.map((i) => {
  if (i > 5) {
    return i;
  }
});

const arr3 = arr.filter((i) => {
  if (i > 5) {
    return i;
  }
});

//console.log(arr3);

const arr4 = arr.filter((i) => i > 10);

console.log(arr4);
