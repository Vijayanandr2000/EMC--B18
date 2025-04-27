// var b = undefined
let a;

if (true) {
  let a = 10;
  a = undefined;
  var b = 25;

  console.log(a, b);
}

console.log(a, b);
