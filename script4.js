// Function Basics
function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}
console.log(favoriteAnimal('Goat'))

function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}
console.log(favoriteAnimal('cow'))

/////////
function sum(param1 , param2) {
    return  param1 + param2;
}
 console.log (1 + 2);

 ////////
 const myText = "I am a string";
 const newString = myText.replace("string", "sausage");
 console.log(newString);

 const myArray = ["I", "love", "chocolate", "flavour"];
 const madeAString = myArray.join(" ");
 console.log(madeAString);

 function random(number) {
  return Math.floor(Math.random() * number);
}
console.log(Math);

// Invoking function
function myFunction() {
console.log("hello");
}

myFunction();
/////Optional parameters
const myArray0 = ["I", "love", "chocolate", "frogs"];
const madeAString0 = myArray0.join(" ");
console.log(madeAString0);

/////Default parameters
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari");
hello();