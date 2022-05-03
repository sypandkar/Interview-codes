//*****************[closure]********************
// function outer() {
//   var a = 100;
//   function inner() {
//     var b = 10;
//     function innermost() {
//       console.log(a);
//       console.log(b);
//     }
//     innermost();
//   }
//   inner();
// }
// outer();

//********************[currying]************************
// function abc(x) {
//   return function xyz(y) {
//     console.log(x * y);
//   };
// }
// // abc(5)(10);

// let multiply = abc(2);
// multiply(3);

//*******************[call]*************************
// let obj1 = {
//   name: 'shubham',
//   city: 'dehugaon',
// };

// function print() {
//   console.log(my name is ${this.name} city is ${this.city});
// }
// print.call(obj1);

//****************[apply]*******************
// let obj2 = {
//   name: 'deepak',
//   city: 'nagar',
// };

// obj2.job = 'mernstack developer';

// function print2() {
//   console.log(
//     my name is ${this.name} city is ${this.city} & job is ${this.job}
//   );
// }

// print2.apply(obj2, [obj2.job]);

//*******************[bind]*******************
// let obj3 = {
//   name: 'krishna',
//   city: 'goloka',
//   abc: function () {
//     console.log(my name is ${this.name}  & location is ${this.city});
//   },
// };

// obj4 = {
//   name: 'shubham',
//   city: 'vrindavan',
// };

// const result3 = obj3.abc.bind(obj4);
// console.log(result3());

/////////////////////////////////////// [shubham codes]/////////////////////////////////////////////////

// // **********************[OOP - object oriented programming]*************************
//  //(way of writing class)
//  class Student {
//     constructor(name, age, batch) {
//       this.myname = name;
//       this.myage = age;
//       this.mybatch = batch;
//     }
//     biodata() {
//       return `Hi I am a man. My name is ${this.myname} , age is ${this.myage} & batch is ${this.mybatch}`;
//     }
//   }

//   class Players extends Student {
//     constructor(name, age, batch, game) {
//       super(name, age, batch);
//       this.mygame = game;
//     }
//     //method
//     play_biodata() {
//       return `${super.biodata()}. I am player of ${this.mygame}`;
//     }
//   }
//   let obj1 = new Players("Shubham", 27, "Mernstack", "Football.");
//   console.log(obj1.play_biodata());

//******************************************************************************************************************
//********************************[constructor - design pattern]************************************
// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("shubham");

//   alert(user.name); // shubham
//   alert(user.isAdmin); // false

//**************************[prototype inheritance - design pattern]**********************************
// function Person(name, job, yearOfBirth) {
//     this.name = name;
//     this.job = job;
//     this.yearOfBirth = yearOfBirth;
//   }
//   // adding calculateAge() method to the Prototype property
//   Person.prototype.calculateAge = function () {
//     console.log('The current age is: ' + (2022 - this.yearOfBirth));
//   };
//   console.log(Person.prototype);

//   // creating Object Person1
//   let Person1 = new Person('shubham', 'pandkar', 1986);
//   console.log(Person1);

//   Person1.calculateAge();

//******************************[js design pattern = constructor with prototype-inheritance ]**************************/
// class Details {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
// }

// Details.prototype.getDetails = function () {
//   return `My name is ${this.name} & surname is ${this.surname}.`;
// };

// const apple = new Details("Shubham", "Pandkar");
// const orange = new Details("Ajinkya", "Shinde");

// console.log(apple.getDetails()); // The apple tastes sweet.
// console.log(orange.getDetails()); // The orange tastes tangy.

//*********************************[ES-6 FEATURES]****************************/

////***********************[destructuring ]*************************/
// let user = ["yahoo baba", 22, "Delhi"];
// let [name, age, city] = user;

// //---------- [Using Spread operator with Destructuring array] ---------
// let user = ["yahoo baba", 22, "Delhi"];
// let [name, ...args] = user; //...args is spread operator

// console.log(name); //yahoo baba
// console.log(args); // [22, 'Delhi']  remaining value ko rest operator array bana deta hain.

// //-----------------[object destructuring]--------------------------
// let user = {
//   name: "Yahoo Baba",
//   age: 25,
//   city: "Delhi",
// };

// let { name, age, city } = user;
// console.log(name); //Yahoo Baba
// console.log(age); //25
// console.log(city); //Delhi

//*****************************[spread operator]****************************/
// //----------------------- Spread operator with OBJECTS----------------------
// var obj1 = {
//   name: "shubham",
//   course: "Mern Stack",
// };
// var obj2 = {
//   age: 26,
// };
// var obj3 = { ...obj1, ...obj2 }; //{name: 'shubham', age: 26}
// console.log(obj3);

// //----------------------- spread operator with array ---------------------------
// // ( Concatinate the array with Spread operator without using the concate function)

// var arr1 = [10, 20, 30, 40];
// var arr2 = [50, 60];

// //concatinate using spread operator
// var arr3 = [5, ...arr1, ...arr2, 70]; // here i can add other value also
// console.log(arr3); // [5, 10, 20, 30, 40, 50, 60, 70]

//***************************************[rest operator]******************************************
// // // ------ now for adding only 20,30,40 we have to use RESR OPERATOR ...args ------------------

// function sum(name, course, ...args) {
//   // ... args is rest operator and it must be a last former parameter
//   console.log(arguments);

//   document.write(`Hello ${name} Edu ${course}: `);

//   let sum = 0;
//   for (let i in args) {
//     sum += args[i];
//   }
//   document.write(sum + "<br>");
// }
// // sum (20,30,40);
// // sum(20,30);
// sum("Shubham Pandkar", "MS IN CS", 20, 30, 40); //Hello Shubham Pandkar : 90
// sum("Mrudula Pandkar", "MS IN CS", 20, 30); //Hello Mrudula Pandkar : 90

//********************** [shallow copy vs deep copy] **********************************//
// // 1. normal copy
// var obj1 = {
//     name: "abc",
//   };

//   obj2 = obj1;
//   // console.log(obj2); //{ name: 'abc' }    here we assigned obj2 on the memory of obj 1
//   obj2.name = "xyz";
//   console.log(obj2.name);
//   console.log(obj1.name); // both obj1 & obj 2 data got updated with valu xyz

// --------------------[2. shallow copy]------------------------------

  var obj1 = {
    name: "abc",
  };
  // 1st method of shallow copy
  // obj2 = Object.assign({}, obj1);
  // 2nd method of shallow copy [using(...spread operator)]
  obj2 = { ...obj1 };
  // console.log(obj2);
  obj2.name = "xyz";
  console.log(obj1.name); // abc (obj1 value was not updated here.)

  // but problem with the shallow copy is when we define obj inside another obj their memory location starts pointing to same memory location. due to which nested objects's values are also gets updated.
  var obj1 = {
    name: "abc",
    address: {
      street: "golok dham road",
      city: "mathura",
    },
  };

  var obj2 = { ...obj1 };
  obj2.name = "xyz";
  obj2.address.city = "mumbai";  // navin proprty . method ne add karta yete
  console.log(obj1.name); //abc
  console.log(obj1.address.city); //mumbai

//---------------------------[3. deep copy]----------------------------
// DEEP COPY - in deep copy the object is converted into string (stringify) then it is parsed.
var obj1 = {
  name: "abc",
  address: function () {},
};

var obj2 = JSON.parse(JSON.stringify(obj1));
obj2.name = "xyz";

console.log(obj2); //obj 2 ne address wale field ko pick hi nahi kiya kyo ki address ki value function hain

// //OR
// //3.1 DEEP COPY by using lodash library (by which nested obj funtion value is also accepted by JSON.stringify)
const _ = "lodash";
var obj1 = {
  name: "abc",
  address: function () {},
};

var obj2 = _.cloneDeep(obj1);
obj2.name = "xyz";

console.log(obj2); //obj2 will pick the value of addreess i.e. function

//*******************************************************************************************

//***********************************[fetch api - get method]*********************************/
// // // /2. Write a program to call the below mentioned rest APIs. Display the email ids returned by the GET method

// // // https://reqres.in/api/users/1
// // // https://reqres.in/api/users/3
// // // https://reqres.in/api/users/10

// // // Outputs should be :// george.bluth@reqres.in  // emma.wong@reqres.in   // byron.fields@reqres.in

// fetch("https://reqres.in/api/users/10")
//   .then((data) => {
//     console.log(data);
//     return data.json();
//   })
//   .then((actualData) => {
//     console.log(actualData);
//     // console.log(actualData.data.email); // skip this line
//   });

//******************************[fetch api - post method] [shubham]***************************
//   var obj = {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   };

//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(obj), // obj is variable in which object data is stored.
//     //we send data on server in JSON format. because JSON is universal format any language can read it.
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

//******************************[fetch api - post method] [ajinkya]************************************
// //  main.js

// // POST request using fetch()
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   // Adding method type
//   method: "POST",

//   // Adding body or contents to send
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),

//   // Adding headers to the request
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   // Converting to JSON
//   .then((response) => response.json())

//   // Displaying results to console
//   .then((json) => console.log(json));

//*********************************[fetch api - form type post method]*******************************

// // //------------- writw this in html -----------------
// // // <form id="myForm">
// // //     Title <input type="text" id="titleText"> <br> <br>
// // //     Body <input type="text" id="bodyText"> <br> <br>
// // //     User Id <input type="text" id="userId"> <br> <br>
// // //     <input type="submit" Id="saveForm">
// // // </form>

// //--------------- Sending data with JSON method *JSON.stringify(obj)* ------------
// document.getElementById("saveForm").addEventListener("click", function (e) {
//   e.preventDefault(); //if we press the button then page will not be refreshed.
//   var obj = {
//     title: document.getElementById("titleText").value,
//     body: document.getElementById("bodyText").value,
//     userId: document.getElementById("userId").value,
//   };
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(obj), //we are converting this object in JSON format & then we ar sending it
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// });

//***************************************************************************************************

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// --------------------------------[myinterview]--------------------------------------------------

// ----------------------------------------------------------------------------------
// -------------------------[methods to create object ]---------------------------------------------------------
// ES6 constructor class
// class person{
//     constructor(name, age,city){
//         this.name = name;
//         this.age = age;
//         this.city = city;

//     }
// }

// const obj = new person("ajnk",49, "pune");
// const mokobj = new person("mokshali", 55, "mumbai")
// console.log(obj);
// console.log(mokobj);
// **********************************************************************

// // Object.create()
// // Creates a new object with the specified prototype object and properties.

// const person = {

//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. and surname is ${this.surname} i am from ${this.city} `);
//     }

//   };
// // // // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   const me = Object.create(person);

//   me.name = 'ajnk';
//   me.surname = 'shinde';
//   me.city = 'pune';

//   me.printIntroduction();
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const obj = new Object (person);

// obj.name = 'xxx';
// obj.surname = 'yyy';
// obj.city = 'zzzzz';

// obj.printIntroduction();

// ################################### [ first class function ] #################################################################
// //   // functions are first calss objects ....
// //   // first class functions are trated as variables
// //   // first calss functions can be passed to anather functions as an argument and return back
// //   //and can assign value to any varible

// const handler = () => console.log ('This is a click handler function');
// document.addEventListener ('click', handler);

// ################################### [ first order function ]--[ajnk]##############################################################
//first order functions are those fun. who doesnt accept another fun as argument and
// doesnt return function as value
// const firstOrder = () => console.log ('I am a first order function!');

// function firstOrderFunc(){
//     console.log ('Hello, I am a First order function');
// }

// function higherOrder(firstOrderFunc){
//     firstOrderFunc()
// }

// higherOrder(firstOrderFunc);
// -------------------------- [ uniary function ] -[ajnk]-------------------------------------------
// // function who accept on one argument and process it

// function add(a){
//     console.log(a + 5);
// }

// add(10)

// -------------------------------[function curring ]-[ajnk]------------------------------------------------------------------
// // curring is function who accepts multiple argument and turning it into sequence of function each with only
// // single argument
// // it turns n-ary [multiple] function into uniary function
// function sum(x){
//   return function(y){
//       return function (z){
//           console.log(x*y*z);
//       }
//   }
// }
// sum(2)(4)(4);

// -------------------------------------------[pure function]--------------------------------------------------------

// // in pure funcion return value only determined by its argument without any side effects

// var mult = 2;

// function multiply(num){
//    console.log(num * mult) ;
// }
// multiply(5)
// multiply(15)
// multiply(25)
// multiply(35)

// -------------------------------------------[ IIFE ]--------------------------------------------------------
// // immediately invoke function are the function that run as soon as it define.
// // primary reason to use it bcoz of data privacy
// // any variable declared in IIFE cannot be accessible from outside of function
// (function (){
//     let msg = "ajinkya";
//     console.log(msg);
// })
// ()

// -------------------------------------------[encoding and decoding URL]--------------------------------------------------------
// // // encodeURI() function is used to encode an URL. This function requires
// // // a URL string as a parameter and return that encoded string. decodeURI()
// // // function is used to deocde an URL.
// // //  This function requires an encoded URL string as parameter and return that decoded string.

// let uri = "https://ways-to-create-objects-in-javascript"
// console.log(uri);

// let encoding = encodeURI(uri)
// console.log(encoding);
// let decoding = decodeURI(uri)
// console.log(decoding);

// ------------------------------------------[memoization]------------------------------------------------------------
// //memoisation is technique to storing a resuly=t in cache
// //whien same problem statement occurs again , it can fetch the o/p from cache
// //otherwise compute the o/p

// function memoaddtion(){
//     let cache = {}

//     return(value) => {
//         if (value in cache){
//             console.log(" i am frm cache");
//             return cache[value]
//         }
//         else{
//             console.log("i m new output");
//             let result = value + 10;
//             cache[value] = result;
//             return result;

//         }
//     }
// }
// let addition = memoaddtion()
// console.log(addition(5));
// console.log(addition(5));
// console.log(addition(50));
// console.log(addition(50));
// console.log(addition(5));

// ------------------------------------------[closures]-[ajnk]-----------------------------------------------------------
// // // closures are combination of functions which are bundled together along with its lexical environment

// function newfunction() {
//   let b = 20;
//   y();
//   function y () {
//     z();
//     function z() {
//       console.log(b);
//     };
//   };
// }

// newfunction();
// *********************************[method 2 ] ***************************************
// function x() {
//     let b = 10;
//     y();
//   function y() {
//       console.log(b);
//     }
// }
// x();

// ----[module]--------------------------------------------------------

// Modules refer to small units of independent, reusable code and also act as
//  the foundation of many JavaScript design patterns.
//  Most of the JavaScript modules export an object literal, a function, or a constructor

// Below are the list of benefits using modules in javascript ecosystem

// Maintainability
// Reusability
// Namespacing

// -------------------------------------[ scope ]]------------------------------------------------------------------

// scope is accessibility of variable, function in a any part of code during runtime

// also defined as visibility of code in any part of code

//---------------------------------------[promise syntax ][deepak]-----------------------------------------------
// const abc=new Promise((res,rej)=>{
//     setTimeout(()=>{
//       let roll=[1,2,3,4,5]
//       // res(roll)
//       rej("errrt while communicating")
//     },2000)

//   })
//   abc.then((roll)=>{
//   console.log(roll)
//   }).catch((err)=>{
//     console.log(err)
//   })

// --------------------------------------[ promise ]--------------------------------------------------------------
// function promise(complete) {
//   return new Promise(function (resolve, reject) {
//     console.log("Fetching data, please wait.");
//     setTimeout(() => {
//       //setTimeout
//       if (complete) {
//         resolve("I am successful");
//       } else {
//         reject("I am failed ");
//       }
//     }, 3000); //setTimeout ke bad hame ak time bhi specify karna padta hain. yaha 3000 miliseconds ke bad wah promise return karega.
//   });
// }
// promise(true)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// --------------------------------------[ nested promise ]--------------------------------------------------------------
// // The process of executing a sequence of
// // asynchronous tasks one after another using promises is known as Promise chaining.
// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(result); // 1
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result); // 2
//     return result * 3;
//   })
//   .then(function (result) {
//     console.log(result); // 6
//     return result * 4;
//   });

// -------------------------------------------------------------------------------------------
// let promise1 = new Promise((resolve, reject) => {
//     let result = {
//         mark = '90%'
//     }
//     resolve(result)
// });

// let promise2 = new Promise((resolve, reject)=>{
//     let result2 = {
//         marks2 = '80%'
//     }
//     resolve(result2)
// })

// let promise3 = new Promise((resolve, reject)=>{
//     let result3 = {
//         marks3 = "70%"
//     }
//     resolve(result3)
// })

// Promise.all([promise1, promise2, promise3])
//  .then((result) => {
//      console.log(result)
//  }).catch((err) => {
//      console.log(err);
//  });

// ------------------------------- [Promise.race ]--------------------------------------------------
// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 2000, 'one');
// });
// var promise2 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 1000, 'two');
// });

// Promise.race([promise1, promise2]).then(function(value) {
//   console.log(value); // "two" // Both promises will resolve, but promise2 is faster
// });

// --------------------------------------[use strict]--------------------------------------
// // The "use strict" directive was new in ECMAScript version 5.

// // It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

// // The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

// // With strict mode, you can not, for example, use undeclared variables.

// // "use strict";
// x= 15
// console.log(x);

// --------------------------------------[ null ]---------------------------------------------
// const abc = null
// console.log(abc);
// console.log(typeof(abc));

//---------------------------------------[[to check capslock is on] --------------------------------------------------

// function enterInput(e) {
//     var flag = e.getModifierState("CapsLock");
//     if(flag) {
//         document.getElementById("feedback").innerHTML = "CapsLock activated";

//     } else {
//         document.getElementById("feedback").innerHTML = "CapsLock not activated";
//     }
//   }

//   enterInput()

// -------------------------------------------[ rest parameters ]-[ajnk]--------------------------------------------------------

// function sum (...args){
//   let sum = 0;
//   for(let i  of args){
//       sum = sum + i;
//   }
//   console.log(sum);

// }
// sum(1,2,3,4,5,6,7,8,9,10)

// -------------------------------------------[ cloning objects and join]-[ajnk]--------------------------------------------------------

// const target = {a:1, b:2, c:15}

// const mark = {b:3, c: 4}

// const combine = Object.assign(target, mark);
// console.log(combine);

// *************************[ spread op ]************************************************
// const abc = {...target}
// *******************************[json ]******************************************
// const abc = JSON.parse(JSON.stringify(target))
// console.log(abc);
// -------------------------------------- [object.seal ]------------------------------------------------------------
// // in seal existing property can be change but cannot delete
// const target = {
//     a:1,
//     b:2
// }

// Object.seal(target);
// target.a = 555;
// console.log(Object.isSealed(target));
// console.log(target);
// -------------------------------------- [object.freeze ]------------------------------------------------------------
// we cannot chng and delete in freeze

//  const abc = {
//      a: 500
//  }
//  const xyz = Object.freeze(abc)
//  console.log(xyz);
// *****************************************************
//  delete abc.a
//  console.log(abc);

// ----------------------------------------[unary(+) operator ]---------------------------------------------------
// // // The unary(+) operator is used to convert a variable to a number.
// // If the variable cannot be converted, it will still become a number but with
// //  the value NaN. Let's see this behavior in an action.
// //
// var x = "100";
// var y = + x;
// console.log(typeof x, typeof y); // string, number

// -------------------------------------[  advantage of a comma operator ]------------------------------------------------------
// for (var a = 0, b =10; a <= 10; a++, b--)

// ------------------------------------ [ typescript ]---------------------------------------------------------
// What is npm install -g typescript
// TypeScript is a typed superset of JavaScript created by Microsoft that adds optional types,
//  classes, async/await, and many other features, and compiles to plain JavaScript.
//  Angular built entirely in TypeScript and used as a primary language. You can install it globally as

//  npm install -g typescript

// ------------------------------------ [ constructor ]---------------------------------------------------------

// class employee{
//  constructor(){
//          this.name = 'ajnk',
//          this.lname = 'shinde'
//  }
// }

// const emp1 = new employee()

// emp1.name = "xxx"
// console.log(emp1);

// ------------------------------------ [ thunk ]---------------------------------------------------------
// // thunk is function which delays the evaluation of the value
// //  it doesnt take any argument  , but give the value wherever u invoke the thunk
// const add = (a,b) => a + b;

// const thunk = () => add(2,3);

// const result = thunk()

// console.log(result);
// ------------------------------------ [ array to object ]---higher----------------------------------------------------

// const fruits = ['apple', 'mango', 'banana', 'chiku', 'jackfruit']

// const fruitsobject = {...fruits}
// console.log(fruitsobject);
// ------------------------------------ [ object to array ]-------------------------------------------------------

// const months = {
//     first: 'january',
//     second: 'feb',
//     third: 'march'
// }

// const xyz = Object.keys(months)
// console.log(xyz);

// const abc= Object.values(months)
// console.log(abc);

// ------------------------------------ [ creating new array dynamically ]-------------------------------------------------------

// const abc = new Array(5).fill('ajinkya')
// console.log(abc);
// ------------------------------------ [ css in console ]-------------------------------------------------------

// ------------------------------------ [ table in console ]-------------------------------------------------------
// console.log('%c ajinkya ','color: orangered; font-size: x-large; background: skyblue');

// const users = [{ "name":"John", "id": 1, "city": "Delhi"}, { "name":"Max", "id": 2, "city": "London"}, { "name":"Rod", "id": 3, "city": "Paris"} ];
// console.table(users);

// ------------------------------------ [ promise example ]-------------------------------------------------------

// function promise(a,b){

//  return new Promise(function(resolve, reject){

//     var c = a/b;

//     setTimeout( () =>{
//         if(a, b){
//             resolve(`ur ans is ${c}`)
//         }else{
//             reject(`failed to calculate`)
//         }
//      },2000)
// })
// }
// promise(10,0).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

// // ******************************[ fetch api ]**********************************************************
// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

// ******************************* [fetch api] [covid 19]**********************************

// fetch("https://api.covid19api.com/summary") // in brackets () is a promise & to consume data fetched by promise we use .
//   // then method
//   .then((data) => {
//     // now, data access by promise is in function named apidata
//     console.log(data);
//     return data.json(); // to get apidata in object form so we can handle it in future ,we use function json
//   })
//   .then((actualdata) => {
//     //     // here we get actual data which is in object format. so we can handle it accordingly
//     // console.log(actualdata);

//     console.log(actualdata.Countries[76]);
//     const mydata = actualdata.Countries[76];
//     document.getElementById(
//       "apiindia"
//     ).innerHTML = `The name of country is ${mydata.Country}.
//      The totalconfirm cases are ${mydata.TotalConfirmed}. The total deaths are ${mydata.TotalDeaths} the total recover cases are ${mydata.TotalRecovered}`;
//   });

// // *******************************[ axios ]**********************************************************
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })

// // ******************************[ bubbling and capturing ]*********************************************************************

// ------------------------------------------[index.html ]----------------------------------
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>

//     <style>
//         div{
//             min-width: 50px;
//             min-height: 50px;
//             border: 2px solid black;
//             padding: 40px;
//         }
//     </style>
// </head>
// <body>

//     <div class="" id="grandparent">
//         <div class="" id="parent">
//             <div class="" id="child"></div>
//         </div>
//     </div>

//     <script src="app.js"></script>
// </body>
// </html>

// ------------------------------------------[app.js]----------------------------------

// document.querySelector('#grandparent').addEventListener('click', ()=> {
//     console.log('grandparent clicked')
// },false);

// document.querySelector('#parent').addEventListener('click', ()=> {
//     console.log('parent clicked')
// },false);

// document.querySelector('#child').addEventListener('click', ()=> {
//     console.log('child clicked')
// },false);

// // in bubbling third argument is always false
// // in capturing third argument is always true

// // bubble travels from in to out
// // capture travels from out to in

// // e.stopPropogation() used to stop further propogation in nested loop

//*************************[throttling]******************************************************* */

//-------------------[index.js] --------------------------------------------------
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

//     <button id="myid">click me</button>
//     <script src="app.js"></script>
// </body>
// </html>

// -----------------------------[app.js]----------------------------------------------------

// const throttle = (fn, delay) => {
//     let last = 0;
//     return (...args) => {
//      const now = new Date().getTime();
//      if (now - last < delay){
//          return;
//      }
//      last= now;
//      return fn(...args)
//     }
//   }

//   document.getElementById('myid').addEventListener('click', throttle((e)=>{
//       console.log('you clicked me');
//   }, 5000 ));

// *************************************************[ pure component vs. react component ]**************************************************************

// import React from ‘react’;

// export default class Test extends React.PureComponent{
//    render(){
//       return <h1>Welcome to GeeksforGeeks</h1>;
//    }
// }
// ----------------------------------------------------------
// Now, ReactJS has provided us a Pure Component. If we extend a class with Pure Component,
//  there is no need for shouldComponentUpdate() Lifecycle Method. ReactJS Pure Component Class
//  compares current state and props with new props and states to decide whether the React
// component should re-render itself or  Not.

////************************************[ synthetic event ]***************************************

// What are synthetic events in ReactJS ?

// In order to work as a cross-browser application, React has created a wrapper same
// as the native browser in order to avoid creating multiple implementations for
//  multiple methods for multiple browsers, creating common names for all events across browsers.
//  Another benefit is that it increases the performance of the application as React
//   reuses the event object.

// It pools the event already done hence improving the performance.

// e.preventDefault() prevents all the default behavior by the browser.
// e.preventDefault()

// bubbles: Return true or false indicates event is a bubbling event or not.
// cancelable: Return true or false indicates if the event can be canceled or not.
// currentTarget: Indicates the element to which the handler is attached
// defaultPrevented: Return true or false, indicates whether the event has been canceled by preventDefault().
// eventPhase: Returns number, indicates the phase
// isTrusted: Return true when the event is generated by the user and false when by the browser/script
// type: Returns string, it indicates the type of the event

//**********************************************[SYNTAXEX ]******************************************* */

//-------- [USEREDUCER]------------
// const reducer =  (state, action)=>{
//     return state
// }

// const [state, dispatch] = usereducer (reducer, initialState)

//-------- [AXIOS]------------
//  axios.get("url").then(res => console.log(res))

//-------[FETCH]------------
//  fetch("url")
// .then((res)=>res.json)
// .then((data)=>console.log(data))

//----------------------------------------
// function add(){
//     let result =33;
//     console.log(result);
// }

// function sub(){
//     let result =33;
//     console.log(result)

// }
// add();
// sub();

// function abc(a) {
//   return function (b) {
//     console.log(a + b);
//   };
// }
// abc(5)(7);

//---------------------------------------[promise syntax ][deepak]-----------------------------------------------
// const abc=new Promise((res,rej)=>{
//     setTimeout(()=>{
//       let roll=[1,2,3,4,5]
//       // res(roll)
//       rej("errrt while communicating")
//     },2000)

//   })
//   abc.then((roll)=>{
//   console.log(roll)
//   }).catch((err)=>{
//     console.log(err)
//   })
//*******************************************************************************************

//************[difference normal function & arraow function]***************
////-------1. Regular function created using function declaration & function expression are constructible and callable-------

// function Car(name) {
//   this.brand = name;
// }
// let carData = new Car("Maruti");
// console.log(carData);

// const Car = (name) => {
//   this.brand = name;
// };
// let carData = new Car("tata nexon");
// console.log(carData);

// //-----------2. arraow function do not have their own this-----------
// let UserInfo = {
//   name: "code improve",
//   fullname() {
//     const test = () => {
//       console.log(this.name + "========");
//     };
//     test();
//   },
// };
// UserInfo.fullname(); //code improve========

// let UserInfo = {
//   name: "code improve",
//   fullname2: () => {
//     console.log(this.name + "Arrow function");
//   },
// };
// UserInfo.fullname2(); //Arrow function

////------------3.Implicitly retuened by the arraow function --------------
// const mask = () => {
//   100;
// };
// console.log(mask());

// const mask1 = () => 100;
// console.log(mask1());
