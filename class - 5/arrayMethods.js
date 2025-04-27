let a = [1, 2, 3, 4, 5];
for (let i = 0; i < a.length; i++) {
  let n = a[i];
  console.log(n);
}

let sum = 0;
for (let i = 0; i < a.length; i++) {
  sum = sum + a[i];
}
console.log(sum);

let even = [];
a.forEach((element) => {
  even.push(element * 2);
  console.log(element);
});

let b = a.map((element) => {
  return element * 2;
});

console.log(b, even);

let c = a.filter((element) => {
  return element % 2 === 0;
});
console.log(c);

let d = a.reduce((initial, curr) => {
  return initial + curr;
}, 1000);
console.log(d);

Array.prototype.sum = function (initial = 0) {
  return this.reduce((initial, curr) => {
    return initial + curr;
  }, initial);
};

console.log("sum", a.sum());
