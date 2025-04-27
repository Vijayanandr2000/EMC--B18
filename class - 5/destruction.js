// let arr = [1, 2, 3, 4, 5];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

// let [a1, b1, c1] = arr;

// console.log(a, b, c);
// console.log(a1, b1, c1);

// let obj = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// let objName = obj.name;

// let { name, age, city } = obj;

// console.log(objName);
// console.log(name);

// let arrOfObj = [
//   { name: "John", age: 30, city: "New York" },
//   { name: "Jane", age: 25, city: "Los Angeles" },
//   { name: "Mike", age: 35, city: "Chicago" },
// ];

// for (let i = 0; i < arrOfObj.length; i++) {
//   let { name, age, city } = arrOfObj[i];
//   console.log(name, age, city);
// }

let arr2 = [1, 2, 3, 4];

let arr3 = [1, 5, 7];

let arr5 = [arr2, arr3]; //[[1, 2, 3, 4],[1, 5, 7],];
let arr4 = [...arr2, ...arr3]; //[1, 2, 3, 4, 1, 5, 7]

// console.log(arr4, arr5);

let arr21 = [1, 2, 3, 4, 5, 6, 7, 8, 7];

let [a, b, ...c] = arr21; //1,2

console.log(a, b, c);
