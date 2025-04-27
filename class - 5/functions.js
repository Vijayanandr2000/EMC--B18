function sumNrml(a, b = 0) {
  console.log("sumNrml", this); //2 + undefined = NaN => "2" + ubdefined = 2undefined => "2" + "2"
  console.log([...arguments]); //[2,2]
  //   console.log({ ...arguments });//{ 0: 2, 1: 2 }
  return a + b;
}

const sumArrow = (a, b) => {
  console.log("sumArrow", this);
  console.log([...arguments]);
  return a + b;
};

const sumDecl = function (a, b) {
  console.log("sumDecl", this);
  return a + b;
};

// console.log(sumNrml(2, 2));
console.log(sumArrow(2, 3));
// console.log(sumDecl(2, 3));

// const user = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   country: "USA",
//   greet: function () {
//     console.log("nrml", this);
//   },
//   greetArrow: () => {
//     console.log("arrow", this);
//   },
//   greetArrow2: function () {
//     return () => {
//       console.log("arrow2", this);
//     };
//   },
// };

// user.greet();
// user.greetArrow();
// user.greetArrow2()();

// (function () {
//   console.log(this);
// })();//IIFE
