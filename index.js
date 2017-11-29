// let number = 0;

// while (number <= 12) {
//   console.log(number);
//   number+=2;
// }
// console.log(number);

// for (i = 0; i <= 12; i += 2) {
//   console.log(i);
// }

// let debt = 60;

// switch (debt) {
//   case 50:
//     console.log("pay big money " + debt);
//     break;
//   case 60:
//     console.log("pay " + debt);
//     break;
//   default:
//     console.log("you pay " + debt);
// }

//functions

// const square = function(x) {
//   return x * x;
// };

// console.log(square);

// const simpleSquare = x => x * x;

// const power = (base, exponent) => {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//     console.log(result);
//   }
//   return result;
// };
// console.log(power(3, 10));
// console.log(Math.pow(3, 10));

//array

//let newArray = [3, 4, 5, 7, 11];
// console.log(newArray);
// newArray.push(5);
// console.log(newArray.push(3));
// console.log(newArray);

//for-of for-each

// for (const item of newArray) {
//   console.log(item);
// }
// newArray.forEach(item2 => console.log(item2));

// function mystery(input) {
//   var secret = 4;
//   input += 2;
//   function mystery2(multiplier) {
//     multiplier *= input;
//     return secret * multiplier;
//   }

//   return mystery2;
// }

// function mystery3(param) {
//   function mystery4(bonus) {
//     return param(6) + bonus;
//   }
//   return mystery4;
// }

// var hidden = mystery(3);
// var jumble = mystery3(hidden);
// var result = jumble(2);
// console.log(result);

//............MCC Class..................//
const num = 37.5;
const str = "Hello World!";
const bool = true;
const arr = [num, str, bool, "Another stirng", 5324, true, false];

//Array Methods

arr.push("Haha!"); //add as a last element
arr.pop(); //removes the last element
arr.unshift("Haha!"); //adds as the first element
arr.shift(); //removes first elements

arr.indexOf("Hello world!"); //returns the index of the item// generally used to find if an item is present on array// if item is not in array it returns -1

//slice

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];
alphabet.slice(1, 3); //returns an new array

//join
const newArray = ["more", "items", true, 53];
//console.log(arr.join(", ")); //returns a string with separator specified

//string methods

const newString = ` Don't have a cow man! `;
//console.log(newString.length);
newString.trim(); //removes whitespaces

//math object
//console.log(Math.floor(14.9999999)); //returns whole number possible lower whole number
//console.log(Math.sqrt(9));
//console.log(Math.ceil(14.1)); //returns whole number lower or higher depend on decimal number

//objects

const obj = {
  height: 6,
  weight: 965,
  name: "Fanindra",
  goodAtScoccer: true
};

//console.log(obj.name);
for (const val in obj) {
  console.log(obj[val]);
}
