const arr = [1, 2, 3, "vijay", [1, 2, 3], true];

// console.log(arr[idx]);
console.log("0", arr[3]);

const obj = {
  name: "vijay",
  age: 23,
  isMarried: false,
  hobbies: ["reading", "coding", "sports"],
  walk: function (name, sName, age, place) {
    console.log("1", name, sName, age, place);
    console.log("2", this.name);

    return "walking";
  },
};

console.log("3", obj.name, obj["name"], obj.walk("kishore", "anand", 23));

function add(a, b) {
  console.log(a + b);

  return a + b;
}

let c = add(2, 3);
console.log(c, add(2, 3));
