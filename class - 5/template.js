function greet(name, age, city, country) {
  //   return (
  //     "Hello, " +
  //     name +
  //     "!" +
  //     "\n" +
  //     "age: " +
  //     age +
  //     "\n" +
  //     "city: " +
  //     city +
  //     "\n" +
  //     "country: " +
  //     country
  //   );

  //template literas
  return `Hello, ${name}! 
age: ${age}
city: ${city}
country: ${country}`;
}

console.log(greet("John", 30, "New York", "USA"));
