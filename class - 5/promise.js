function goingGym(n) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (n % 2 === 0) {
        res("I am going to the gym");
      } else {
        rej("I am not going to the gym");
      }
    }, 5000);
  });
}

// console.log(1);

// goingGym(10)
//   .then((data) => {
//     console.log(data);
//   })
//   .then(() => {
//     console.log(3);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function solve() {
  console.log(1);
  const resp = await goingGym(10);
  console.log(resp);
  console.log(3);
}

solve();
