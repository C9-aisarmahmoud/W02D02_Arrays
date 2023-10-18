const orderedPlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
const unorderedPlanets = ["Mars", "Earth", "Mercury", "Jupiter", "Venus"];
console.log (orderedPlanets[3]);
console.log (unorderedPlanets[0]);

const animals = ["Cat", "Dog", "Dolphin", "Squirrel", "Koala"];
console.log (animals.length)

// a- use the `length` property
const orderedPlanets1 = ["Mercury", "Venus", "Earth", "Jupiter"];
// b- don't use the `length` property (use the index)
const unorderedPlanets1 = ["Neptune", "Earth", "Mercury"];

orderedPlanets1.push("mars")
console.log(orderedPlanets1)

const animals1 = ["Cat", "Dog", "Dolphin", "Squirrel"];
animals1.shift();
animals1.unshift("koala");
console.log(animals1);

const reptiles = ["Snake", "Lizard", "Turtle"];
reptiles.push("Dinosaur");
console.log(reptiles);

const fish = ["Swordfish", "Clownfish", "Shark"];
fish.unshift("Goldfish");
console.log(fish);

let num= [1, 9, 9, 3];
console.log(num.join(""));

const string=["John", "Doe", "The Third"]
console.log(string.join(" "))

const helloWorld=["hello", "world"];
console.log(helloWorld);

const numDash = [1, 2, 3, 4];
const revArray = numDash.reverse();
console.log (revArray.join("-"));

const addToArray = function (array, string) {
    array.push(string);
    return array;
  };
  
console.log  (addToArray(["Hello", "i", "am"], "John")); // => ["Hello", "i", "am", "John"]
console.log(addToArray(["Hello", "John", "i", "am"], "Jane")); // => ["Hello", "John", "i", "am", "Jane"]




const convertToString = function (array) {
  // TODO: Your code here
  let stringConvert = array.join(" ");
  return stringConvert;
};

console.log(convertToString(["Hello", "i", "am", "John"])); // => "Hello i am John"
console.log(convertToString(["Hello", "John", "i", "am", "Jane"]));


const accessElement = function (array, index) {
  // TODO: Your code here
  if (index > array.length){
    return "No element at index " + index;
  }
  else{
    let element = array[index];
    return element;
  }
};

console.log(accessElement([1, 2, 3, 4, 5], 0)); // => 1
console.log(accessElement([1, 2, 3, 4, 5], 3)); // => 4
console.log(accessElement([1, 2, 3, 4, 5], 10));// => "No element at index 10"



const isInArray = function (array, string) {
  // TODO: Your code here
  if (array.indexOf(string)!= -1){
    return true;
  }
  else{
    return false;
  }
};

console.log(isInArray(["John", "Jane", "Mark"], "Jane")); // => true
console.log(isInArray(["John", "Jane", "Mark"], "Mark")); // => true
console.log(isInArray(["John", "Jane", "Mark"], "Smith")); // => false
console.log(isInArray(["John", "Jane", "Mark"], "Doe")); // => false


// do not use `push` or array assignments, only `unshift`
const addToLast = function (array, value) {
 
  const revArray = array.reverse();
  
  
  revArray.unshift(value);

  const addToArray = revArray.reverse();
  
  return addToArray;
};

console.log(addToLast([1, 2, 3], 4)); //[1, 2, 3, 4]
console.log(addToLast([10, 6], 1)); 


const getLength = function (array) {
  // do not use array.length
 let count = 0;
 array.
  return  ;
};

console.log(getLength([1, 2, 3, 4])); // 4
console.log(getLength([10, 22, 30]));


const getFirstVal = function (array) {
  const [firstValue] = array;
  return firstValue;
};

console.log(getFirstVal([1, 2, 3, 4]));   //  1
console.log(getFirstVal([51, 3, 3, 4]));  //  51

const updateOrCreate = function (array, value, index) {
  if (index < 0) {

    array[0] = value;
  } else if (index < array.length) {

    array[index] = value;
  } else {
    
  }
  return array;
};

console.log(updateOrCreate([10, 20, 30], 50, 1));   // => [10, 50, 30]
console.log(updateOrCreate([10, 20, 30], 40, 3));   // => [10, 20, 30, 40]
console.log(updateOrCreate([10, 20, 30], 100, 10)); // => [10, 20, 30, 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 100]

const sliceArray = function (array, startVal, endVal) {
  
 

  
  if (startVal <= endVal) {
    return array.slice(startVal, endVal);
  } else {
    return [];
  }
};

console.log(sliceArray([10, 20, 30, 40, 50, 60], 10, 60)); // => [10, 20, 30, 40, 50, 60]
console.log(sliceArray([10, 20, 30, 40, 50, 60], 20, 40)); // => [20, 30, 40]
console.log(sliceArray([10, 20, 30, 40, 50, 60], 20, 20)); // => []
console.log(sliceArray([10, 20, 30, 40, 50, 60], 50, 20)); // => []
