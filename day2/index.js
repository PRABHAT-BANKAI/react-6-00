// // Array and Object Intro
// // Available methods

// // what is array
// // array is collection multiple data type

// let array = ["one", "two", "three", "four", "five", "six"];

// // map
// // filter
// // forEach
// // reduce
// //push
// //pop

// let result = array.map((element) => {
//   return element + "star";
// });

// console.log(result);

// let result2 = array.filter((element) => {
//   return element != "three";
// });

// console.log(result2);

// let result3 = array.forEach((element) => {
//   console.log(element);
// });

// console.log(result3);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result4 = arr.reduce((acc, element) => {
//   return (acc += element);
// }, 0);

// console.log(result4);

// //Object  is a key value pairs

// let student = {
//   username: "batman",
//   age: 12,
//   subject: "english",
// };
// console.log(typeof student);

// console.log(student.age);
// console.log(student["subject"]);

// let keyArr = Object.keys(student);
// console.log(keyArr);

// let valueArr = Object.values(student);
// console.log(valueArr);

// Spreading
// merging
// destructuring
// map and key
// filter and reduce

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

//spread ...
let arr3 = [...arr1, ...arr2];

console.log(arr3);

let object = {
  userName: "batman",
};

let object2 = {
  city: "gotham city",
};

let object3 = { ...object, ...object2 };
console.log(object3)



let [a,b,c] = ["batman","ironman","thor","hulk","spiderman"]

console.log(a,b,c)

let {skills,userGame,place,age} = {userGame:"pubg",place:"india",age:12}

console.log(userGame,age)

