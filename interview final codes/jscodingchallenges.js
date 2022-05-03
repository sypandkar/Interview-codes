// ********************************[ fibonacci][shubham]******************************

// const number = prompt("enter the number");
// let n1 = 0,
//   n2 = 1,
//   temp;

// for (let i = 1; i <= number; i++) {
//   temp = n1 + n2;

//   n1 = n2;
//   n2 = temp;
//   document.write(n1);
// }

// ********************************[ fibonacci][deepak]******************************
// let num = 100;
// let x = 0;
// let y = 1;
// let fn = x + y;
// console.log(x);
// while (fn < num) {
//   console.log(fn);
//   fn = x + y;
//   x = y;
//   y = fn;
// }

//*************************[sort numbers by for loop]********************************
// const array = [1, 8, 2, 3, 3, 4, 5, 5];

// function sortarray(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = 0; j <= arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   console.log(arr);
// }
// sortarray(array);

//**************************[sort alphabates] [IMP]*****************************
// const alphabates = ["b", "c", "a", "e", "d", "f"];

// function myfunction(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = 0; j <= arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   console.log(arr);
// }
// myfunction(alphabates);

//OR

// const alphabates = ["b", "c", "a", "e", "d", "f"];

// function myfunction(arr) {
//   let ascending = arr.sort(); // ascending
//   console.log(ascending);
//   //------
//   //  let decending = arr.sort((a,b)=> b.localeCompare(a))  // decending
//   // console.log(decending)
// }
// myfunction(alphabates);

//************************[second largest number][for loop]***************************
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function secondlargest(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; i++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// const result = secondlargest(array);
// console.log(result);

// const result2 = result.length - 1;
// console.log(result2);

//*****************[second largest number][inbuilt sortmethod]***********************
// const numbers = [5, 4, 3, 2, 1, 6, 7, 9, 9, 8, 8, 10];

// // //SORT METHOD
// function secondLargest(arr) {
//   let result1 = arr.sort((a, b) => b - a);
//   console.log(result1.length - 3);
//   // jar values double nastil tar .length-1 karayche.
// }
// const result = secondLargest(numbers);

////*****************[second largest number][for loop]***********************
// const numbers = [5, 4, 3, 2, 1, 6, 7, 9, 9, 8, 8, 10];
// function findduplicates(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   console.log(arr);
// }
// findduplicates(numbers.length - 3);

//***********************[find unique from two arrays][filter method]*******************************
// const arr1 = ["collection", "sample", "data", "value"];
// const arr2 = ["data", "val", "collection"];

// let unique1 = arr1.filter((i) => arr2.indexOf(i) === -1);
// let unique2 = arr2.filter((i) => arr1.indexOf(i) === -1);

// const unique = unique1.concat(unique2);

// console.log(unique);

//******************************[find duplicate][filter method]**********************************

// const arr=[1,2,2,4,5,6,6]
// const op=arr.filter((ele,index)=>arr.indexOf(ele)!=index)
// console.log(op);

//******************************[palindrom]**********************************
// const string = prompt("enter any string")
// // const string="nitin
// const fin=string.split("").reverse().join("")
// if(string===fin){
// console.log("string is padidrom ")
// }else{
// console.log("string is not same")
// }

//*************************[reverse string by for loop]*********************************

// const str = 'shubham';
// let blankstr = '';
// for (let i = str.length - 1; i >= 0; i--) {
// blankstr += str[i];
// }
// console.log(blankstr);

//*************************[reverse string by reduce method]********************************
// let string = 'shubham';
// const result = Array.from(string).reduce((acc, cur) => cur + acc);
// console.log(result);

//***********************[find prime number from an array ][for loop]**************************

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i <= number.length; i++) {
//   let temp = 0;
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       temp = 1;
//     }
//   }
//   if (i > 1 && temp == 0) {
//     console.log(i);
//   }
// }

//*******************[find prime numbers with prompt]***************************
// let number1 = parseInt(prompt(`enter lowest number here `));
// let number2 = parseInt(prompt(`enter highest number here `));

// for (let i = number1; i <= number2; i++) {
//   let temp = 0;
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       temp = 1;
//     }
//   }
//   if (i > 1 && temp == 0) {
//     console.log(i);
//   }
// }

//*******************[ check whether it is prime number - true or false]*************************
// function isPrime(num) {
//     var prime = num != 1;
//     for(var i=2; i<num; i++) {
//         if(num % i == 0) {
//             prime
//             break;
//         }
//     }
//     return prime;
// }
// console.log(isPrime(5));

//********************************[pyramid pattern]********************************
// let row = 5;
// for (let i = 1; i <= row; i++) {
//   for (let k = 1; k <= row - i; k++) {
//     document.write('&nbsp;');
//   }
//   for (let j = 1; j <= i; j++) {
//     document.write('*');
//   }
//   document.write('<br/>');
// }

//*******************[adition of the nested array elements]************************
// function print(arr) {
//   const a = [...arr,5,3]
//   const b = new Set(a)
//   console.log([...b])
//   const d=[...b]
//   const c = d.reduce((acc, cur) => acc = acc+cur)
//   console.log(c)
// }
// print([1,2,3,4,5],5,3);

//***********************[flatten array]****************************
// const array = [[1, 2, 3, 4, 5, 6], 5, 6, 8, 9];
// const a = array.flat(2);
// console.log(a);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ******************** [fullstack cafe] *[mycoding]*********************
// -------------------------[ *** at end of string ]-[ajnk]-----------------
// const myname = "ajinkya";

// const firstthreeletters = myname.slice(0, 3);
// console.log(firstthreeletters);

// const padding = firstthreeletters.padStart(myname.length, "*");
// console.log(padding);

//------------------------ [lucky 7 ]-------------------------------------------

// const myarray = [2, 1, 5, 7, 7, 7, 1, 0];

// function lucky_sevens(arr) {
//   // if less than 3 elements then this challenge is not possible
//   if (arr.length < 3) {
//     return "not possible";
//   }

//   // because we know there are at least 3 elements we can
//   // start the loop at the 3rd element in the array (i=2)
//   // and check it along with the two previous elements (i-1) and (i-2)
//   for (var i = 2; i < arr.length; i++) {
//     if (arr[i] === 7 && arr[i - 1] === 7 && arr[i - 2] === 7) {
//       console.log("true");
//       //   break;
//     } else {
//       console.log("false");
//     }
//   }
// }

// lucky_sevens(myarray);
//-----------------------------[clock]-[ajnk]-------------------------------------

// var shorthand = 12;

// const longhand = prompt("enter the position of minute hand");

// function calculateangle(longhand) {
//   if (longhand >= 12) {
//     console.log("enter no below 12");
//   } else {
//     let result = (longhand / 12) * 360;
//     console.log(result);
//   }
// }

// calculateangle(longhand);

// ---------------------------[sum of several array ]-[ajnk]----------------------------------------------------
// const input = prompt("enter lower num");
// const input2 = prompt("enter higher num");

// function findallmultbythree(low, high) {
//   let array = [];
//   for (let i = low; i <= high; i++) {
//     if (i % 3 === 0) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// const result = findallmultbythree(input, input2);
// console.log(result);

// ----------------------------[count odd]-[ajnk]-[reduce]---------------------------------------------------------------

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function allodds(ajnk) {
//   const odd = ajnk
//     .filter((x) => x % 2)
//     .reduce(function (acc, curr) {
//       acc = acc + curr;
//       return acc;
//     }, 0);

//   return odd;
// }

// const abc = allodds(array);
// console.log(abc);

// ----------------------------[count odd]-[ajnk]--------------------------------------------------------

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// function allodds(arr) {
//   let sum = 0;

//   for (let i = 0; i <= arr.length; i++) {
//     if (i % 2 === 1) {
//       sum = sum + i;
//     }
//   }
//   console.log(sum);

//   //   //   ****************************[ forOf ] *****************************************
//   // for(let i of arr){
//   //     if(i % 2 === 1){
//   //         sum = sum + i;
//   //     }
//   // }
//   //  console.log(sum);
//   //   //  ******************** [forEach ]***********************************************
//   //   arr.forEach((i) => {
//   //     if (i % 2 === 1) {
//   //       sum = sum + i;
//   //     }
//   //   });
//   //   console.log(sum);
// }
// allodds(array);

//******************************[count odd][by reduce & filter]***************************/

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// function oddcount(arr) {
//   var odd = arr.filter((e) => e % 2).reduce((acc, cur) => (acc = acc + cur));
//   console.log(odd);
// }
// oddcount(array);

// -----------------------------------[sum of array of number by adding 1 to each ]----------------------------------

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sum(arr) {
//   let result = 0;
//   for (let i = 0; i <= arr.length; i++) {
//     result = result + (i + 1);
//   }
//   console.log(result);

//   //   //   ****************************[ forOf ] *****************************************

//   //   for (let i of arr) {
//   //     result = result + (i + 1);
//   //   }
//   //   console.log(result);

//   //   //  ******************** [forEach ]***********************************************

//   //   arr.forEach((i) => {
//   //     result = result + (i+1 );
//   //   });
//   //   console.log(result);
// }
// sum(array);

//******************************[palindrom]**********************************
// const string=prompt("enter any string")
// // const string="nitin
// const fin=string.split("").reverse().join("")
// if(string===fin){
//   console.log("string is padidrom ")
// }else{
//   console.log("string is not same")
// }

// ---------------------[check if reverse is same of original ]-[ajnk] [palindrom]----------------------------------------------
// const string = prompt("enter any string");
// const string = "nitin";

// const split = string.split("");
// // console.log(split);

// const reverse = split.reverse();
// // console.log(reverse);

// const join = reverse.join("");
// // console.log(join);

// if (string === join) {
//   console.log("is same");
// } else {
//   console.log("not same");
// }

// ----------------------- [ conact array] ----------------------------------------------
// const array = [1,2,3,4,5,6,7,8,9]

// const newarray = array.concat(array);

// console.log(newarray);
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// const array = [1,2,3,4,5,6,7,8,9, 10]

// const newarray = [...array, ...array]

// console.log(newarray);

//------------------------------[ reverse each word ]-------------------------------------------------------
// var string = "Welcome to this Javascript Guide!";
// function reverseBySeparator(string, separator) {
//   console.log(string.split(separator).reverse().join(separator));
// }

// var reverseEntireSentence = reverseBySeparator(string, "");
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

//OR
//********[shubham's method]**********
// var string = "Welcome to this Javascript Guide!";
// function reverseit(str) {
//   let arr = str.split("").reverse().join("");
//   console.log(arr);
// }
// reverseit(string);

// --------------------------------------[multiply of 3 num. by currying ]-[ajnk]-------------------------------------------------------

// function mul(x){
//   return function(y){
//     return function(z){
//       return x * y * z ;
//     }
//   }

// }

// console.log(mul(10)(5)(2));

// -----------------------------------------[ empty an array ]------------------------------------------------------

// let array = [1,2,3,4,5]

// array = []
// // ++++++++++++++++++++++++++++++++
// // while(array.length){
// //   array.pop()
// // }
// // +++++++++++++++++++++++++++++++++++
// // array.length = 0
// // +++++++++++++++++++++++++++++++++++
// // array.splice(0, array.length)

// console.log(array);

// --------------------------------------[addition of 2 num but one no is fixed ]-[ajnk]-------------------------------------------------------------

// function createbase(ABC){
//   return function(N){
//    console.log(ABC + N);
//   }
// }

//  let addsix = createbase(10);
//  addsix(6)

// ---------------------------------------[finding duplicates ]-----------------------------------------------------------------

// const array = [1, 2, 3, 4, 5, 6, 8, 9, 1, 5, 4, 6, 8, 6];

// const newarray = new Set(array); //without spread operator it shows object
// console.group(newarray);

// const arr = Array.from(newarray);
// console.log(arr);
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function news(array) {
//   result = [];
//   for (let i of array) {
//     if (result.indexOf(i) === -1) {
//       result.push(i);
//     }
//   }
//   console.log(result);
// }

// news(array);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function finddupllicates(arr) {
//   let sortedarray = arr.slice().sort();
//   let results = [];

//   for (let i = 0; i < sortedarray.length; i++) {
//     if (sortedarray[i + 1] === sortedarray[i]) {
//       results.push(sortedarray[i]);
//     }
//   }
//   console.log(results);
// }
// finddupllicates(array);

// //+++++++++++++++++++++++++++++++++++++[duplicates by filter method]+++++++++++++++++++++++++++++++
// const duplicates = array.filter(
//   (value, index) => array.indexOf(value) != index
// );
// console.log(duplicates);

// -----------------------------------[number is an integer]-[ajnk]----------------------------------------------------------------
// const num = prompt("enter any value")
// function  checkinteger(num){
//   if(num % 1 === 0){
//     console.log("in an integer");
//   }
//   else{
//     console.log("is not an integer");
//   }
// }

// checkinteger(num)

// ---------------------------------------------[ curring ]-[ajnk]--------------------------------------------------------

// function curryUnaryFunction(x){
//   return function (y){
//     return function (z){
//       return x * y * z ;
//     }
//   }
// }

// // const curryUnaryFunction = a => b => c => a + b + c;
// // curryUnaryFunction (1); // returns a function: b => c =>  1 + b + c
// // curryUnaryFunction (1) (2); // returns a function: c => 3 + c
// const abc = curryUnaryFunction (1) (2) (30);

// console.log(abc);

// ******************************* [count occurance] ***********************************************************
// // const string = prompt("Enter a string: ");
// const string = "ilovepune";

const Char = (str) => {
  // str aiwaji to arr ghe hach code lihi ok bol
  const counts = {};
  for (const i of str) {
    if (counts[i]) {
      counts[i]++;
    } else {
      counts[i] = 1;
    }
  }
  return counts;
};
const result = Char(string);
console.log(result);

// // function Char(str) {
// //   let counts = {};
// //   for (let i of str) {
// //     if (counts[i]) {
// //       counts[i]++;
// //     } else {
// //       counts[i] = 1;
// //     }
// //   }
// //   return counts;
// // }
// // const abc = Char(string);
// // console.log(abc);

// **************************************[ addition of numbers in string ]****************************************
// const abc = "ajinkya494949"

// function sum(str){
//     let newarray= []
//     let result= 0;
// //  let neww = str.split("").filter(Number).map(Number).reduce((acc,curr)=> acc= acc+ curr)
//    let neww = str.split("").map(Number).filter(Number)
//    for(let i=0;i<neww.length; i++){
//        result = result + neww[i]
//     }
//     console.log(result);

// }
// sum(abc)
// *******************************************************************************************

// const namee = "grishma23101989";

// function chcknum(str) {
//   const result = str.split("").map(Number).filter(Number).reduce((acc,curr)=> acc = acc + curr)
//   console.log(result);
// //   let output = 0;
// //   for (let i = 0; i < result.length; i++) {
// //     output = output + result[i];
// //   }
// //   console.log(output);
// }
// chcknum(namee);

// *******************************************************************************************

// function sumstring(str) {

//     let sum = 0

//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(parseInt(str[i]))) {
//             console.log(str[i]);
//             sum += parseInt(str[i])
//         }
//     }
//     console.log(sum);
// }
// sumstring("grishma1989")

// ************************************[ table of 1 to 10 ]*******************************************************

// const numberr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function table(num, arr2) {
//   for (let i = 1; i < arr2.length; i++) {
//     for (let j = 1; i < num.length; j++) {
//       console.log(i + "*" + j + " = ");
//     }
//   }
// }

// table(numberr, array2);

//  -----------------------------------------------------------

// for(let a = 1;a<10;a++){
//     for(let b = 1;b<10;b++){
//         console.table(a + "*" + b + " = " + a*b)
//     }
// }

// ************************************[km to meter convertor ]********************************************************

// const numberr = prompt('enter a number to convert')

// function convertor(num){
//   const result  = num * 1000;
//   document.write(num +"km" + " " + " is equal to " + result + " " + "meter")
// }
// convertor(numberr)

// *************************************[sum of all numers in an array]*******************************************************

// const array = [1, 2, 3, 4, 5, 6, 7];

// function sum(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     result = result + arr[i];
//   }
//   console.log(result);
// }
// sum(array);
// ********************************[reverse an array]*********************************************************

// const array = [1,2,3,4,5]

// function reversearray(array){
//     let rev = []
//   for(let i= array.length; i>=1; i--){
//       rev.push(i)
//   }
//   console.log(rev);
// }
// reversearray(array)
// ***********************************[ make first letter to uppercase ]********************************************************

// const string = "i am ajinkya shinde";

// function upperr(str) {
//   const divide = str.split(" ");
//   console.log(divide);
// }
// upperr(string);
// **************************************************************************
// let str = "my name is akash";

// function toupper(para) {
//   const a = para.split(" ");
//   return a.map((word) => word[0].toUpperCase() + word.slice(1));
// }
// const abc = toupper(str);
// console.log(abc);
// const regex = /,/gi;
// const final = abc.toString().replace(regex, " ");
// console.log(final);
//  ************************************************************************************
// let  str="my name is akash"

// function toupper(para){
// const a=para.split(" ")
// return a.map((word) => word[0].toUpperCase() + word.slice(1))
// }
// const abc =(toupper(str))
// const result = abc.join(" ")
// console.log(result);

// *****************************[ sort number array ]***********************************************************************

// const array = [5, 4, 6, 8, 2, 1, 9, 7, 6, 3];

// function sort(arr) {
//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// const result = sort(array);
// console.log(result);

//**************************[sort alphabates ] [IMP]**********************/
// function myFunction(arr) {
//   console.log(arr.sort());
// }
// myFunction(["b", "c", "d", "a"]);

//OR

// function myFunction(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   console.log(arr);
// }
// myFunction(["b", "c", "d", "a"]);

// ******************************************************

// const array =[5,8,6,4,1,3,2,8,7,9]
// function sortGreatest(arr) {
//     // manually sort array from largest to smallest:
//     // loop forwards through array:
//     for (let i = 0; i < arr.length; i++) {
//
//       for (let j = i; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//           let temp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = temp;
//       };
//     };
//     return arr;
//   };

//   const result = sortGreatest(array)
//   console.log(result)

// *******************************[find negative]****************************************************

// const array= [5,7,-6,-8,1,5,4,-7,-9]

// function findneg(arr){
//     let result=[]
//  for(i=0; i<=arr.length; i++){
//      if(arr[i] < 0){
//          result.push(i)
//      }
//     }
//     // console.log(result)
//     return result;
// }
// const yyy= findneg(array)
// console.log(yyy)

// *******************************************[find max ]**************************************************

// const array = [5, 7, 5, 15, 3, 1, 55, 6, 4, 9, 11, 5, 3, 2];

// function findmax(arr) {
//   let max = 0;
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   console.log(max);
// }
// findmax(array);
// *************************************************************************************
// const abc = array.reduce((max,curr)=> {
//    if(curr > max){
//        max = curr
//    }
//    return max;
// },0)

// console.log(abc);
// **********************************************************************************
// const aaa = array.sort((p,q)=> p-q)
// console.log(aaa);
// // const result = []
// // const hhh = aaa.pop()
// // console.log(hhh);

// const myrslt = aaa.slice(-1)
// console.log(myrslt);

// *****************************[finding commons in array ]*[pranay]************************************************

// const array = [1, 2, 2, 3, 3, 4, 5, 5];

// function common(array) {
//   let arrayforcommon = [];
//   let arrayforUncommon = [];

//   for (let i of array) {
//     if (arrayforcommon.indexOf(i) === -1) {
//       arrayforcommon.push(i);
//     } else {
//       arrayforUncommon.push(i);
//     }
//   }
//   console.log(arrayforcommon);
//   //  console.log(arrayforUncommon)
// }
// common(array);

// *****************************[ find second smll no] [pranay]**********************************************

// const array = [1,9,3,4,5,5,8,1,4]

// const op = array.sort()

// const result= op[1]
// console.log(result);
// ********************************[sort array ]***********************************************************

// const array = [1, 8, 2, 3, 3, 4, 5, 5];
// function sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// const final = sort(array);
// console.log(final);

// ***********************************[ solve ] [avinash]***********************************

// var variable1 = 23;
// let variable2 = 89;
// function catchValues() {
//   console.log(variable1);
//   console.log(variable2);
// }
// catchValues();

// ************************************[ solve ] [avinash]********************************************************

// function normalFunc(){
//     var a = 34;
//     return 22;
//     console.log(a)
//   }
//   normalFunc()

// ************************************[ solve ] [avinash]**************************************

// 3 what  will be the ouput

// "a" === "b"

// ************************************[ spread nd rest parameter ] [avinash]**************************************

// const myarr = [1,2,3,4,5]

// const spread = [...myarr]
// console.log(spread);
// ******************************************
// function sum (...args){
//   let sum = 0;
//   for(let i  of args){
//       sum = sum + i;
//   }
//   console.log(sum);

// }
// sum(1,2,3,4,5,6,7,8,9,10)

// ***************************************[ fetch ]*[avinash ]*******************************************************

// fetch("url")
// .then((res)=> res.json())
// .then((data)=> console.log(data))

// ***************[ axios ]***********************************
// const aaa = axios.get('url')
// console.log(aaa);

// ***************************************[ sort ]*[avinash ]*[imp]******************************************************
// const A=[8,10,9,2,3]
// const B=[1,2,3,5,7]

// const concat = A.concat(B)
// // console.log(concat);

// function sort(arr){
//  for(let i=0;i<arr.length;i++){
//      for(let j=0 ;j<arr.length;j++){
//          if(arr[i]< arr[j]){
//              let temp = arr[i]
//              arr[i] = arr[j]
//              arr[j] = temp
//          }
//      }
//  }
//  console.log(arr)
// }
// sort(concat)

// ***************************************[ solve ]*[avinash ] [intersoft]******************************************************
// function showName(){
// console.log(name);
// // #########[ teporal dead zone]###########
// var name="Full Name";
// }
// showName()

// *********************************[ find out the second largest number  ]******************************************************************
// // 1. find out the second largest number
// let ranArray=[22,33,24,56,1000,44,22,12,1,888,9,5,4]

// function mysort(arr){
//  for(let i=0; i<arr.length;i++){
//      for(let j=0; j<arr.length;j++){
//          if(arr[i]<arr[j]){
//              let temp = arr[i]
//              arr[i] = arr[j]
//              arr[j] =temp
//          }
//      }
//  }
//  return arr
// }
// const abc = mysort(ranArray)
// console.log(abc)

// const secondlargest = abc[abc.length - 2]
// console.log(secondlargest)
// ***********************************************************
// const sortnew = ranArray.sort((a,b)=>b-a)
// console.log(sortnew)

// const secondlargest = sortnew[1]
// console.log(secondlargest)

// ***********************************[ find vowels ]*[avinash]************************************************************

// const myname = "jairadhekrishna"

// const vowels = ['a', 'e', 'i', 'o' , 'u']

// function findvowels(str){
//     blankarr =  []
//     let count = 0;
//  for( let i of str){
//      if(vowels.includes(i)){
//         blankarr.push(i)
//         count++
//      }
//  }
//  console.log(blankarr);
//  console.log(count);
// }
// findvowels(myname)

// **********************************************************

// const myname = "jairadhekrishna"

// function findvowels(str){
// const abc = str.match(/[aeiou]/gi)
// console.log(abc);
// }
// findvowels(myname)

// ********************************[ solve ]*[shivam ]*****************************************
// (function() {
//     console.log('this is the start');

//     setTimeout(function cb() {
//       console.log('Callback 1: this is a msg from call back');
//     });

//     console.log('this is just a message');

//     setTimeout(function cb1() {
//       console.log('Callback 2: this is a msg from call back');
//     }, 0);

//     console.log('this is the end');
//   })();

// ***********************************************************************************************
// const arr1 = ['collection', 'sample', 'data', 'value']
// const arr2 = ['data', 'val', 'collection']

// function finduni(arr1,arr2){
//     let blankarr=[]
//  for(let i=0;i<arr1.length;i++){

//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]===arr2[j]){
//            blankarr.push(j)
//         }
//     }
//  }
//  return blankarr
// }
// const abc =finduni(arr1,arr2)

// console.log(abc)

// ******************************************************************
// let a = ["1", "1", "2", "3", "3", "1"];
// let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
// console.log(unique);

// *********************************** [ find status true ]*********************************************
// let employees = [
//     {
//       "role": "senior",
//       "name": "first",
//       "status": true
//     },
//     {
//       "role": "lead",
//       "name": "second",
//       "status": false
//     },
//     {
//       "role": "lead",
//       "name": "third",
//       "status": false
//     },
//     {
//       "role": "junior",
//       "name": "fourth",
//       "status": true
//     },
//     {
//       "role": "senior",
//       "name": "none",
//       "status": true
//     }
// ]

// const newarray = employees.filter((el)=>{
//      return el.status === true
// })

// console.log(newarray);

// ********************************* [ find status true ]* [react ]*****************************************************

// import "./styles.css";

// export default function App() {
//   let employees = [
//     {
//       role: "senior",
//       name: "first",
//       status: true
//     },
//     {
//       role: "lead",
//       name: "second",
//       status: false
//     },
//     {
//       role: "lead",
//       name: "third",
//       status: false
//     },
//     {
//       role: "junior",
//       name: "fourth",
//       status: true
//     },
//     {
//       role: "senior",
//       name: "none",
//       status: true
//     }
//   ];

//   const onChange = () => {
//     for (let x of employees) {
//       if (x.status === true) {
//         console.log(x);
//       }
//     }
//   };
//   return (
//     <div className="App">
//       <button onClick={onChange}> Click Me! </button>
//     </div>
//   );
// }

// ********************************[ fibonacci ]******************************************************

const number = prompt("enter the number");
let n1 = 0,
  n2 = 1,
  temp;

for (let i = 1; i <= number; i++) {
  document.write(n1);
  temp = n1 + n2;

  n1 = n2;
  n2 = temp;
}

// spread operator
// ***************************************************************
// const number = prompt('enter the number')
//  let n1=0 ,n2=1 ,temp;

// for(let i=1;i<=number; i++){
//     document.write(n1);

//     temp = n1+n2
//     n1 = n2
//     n2 = temp

// }

// ******************************************************************************************

// //find unique values and duplicate values push in 2 different arrays

// let arr = [1, 2, 2, 3, 3, 4, 5, 5];

// // //find unique values
// // let arr1 = [...new Set(arr)];
// // console.log(arr1)

// //duplicate values

// let arr2 = arr.filter((value,index) => arr.indexOf(value)!= index)
// console.log(arr2)

// *********************************[code spilliting via React.lazy() loading method]*********************************************************

// // PARENT COMP
// const Content = React.lazy(() => import("./Content"));
// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <p>hi welcome to code splitting import method</p>;
//         <Suspense fallback={<h1 style={{ color: "red" }}>Content is comming soon..</h1>}>
//           <Content />
//         </Suspense>
//       </>
//     );
//   }
// }

// export default App;
// ***************************************
//CHILD COMP
// function Content() {
//     return (
//       <p>
//         Lorem type 1000 words here
//       </p>
//     );
//   }
//   export default Content;

// ************************************** [ Profiler ]* [react ]*****************************************

// import React, { Profiler } from "react";

// class ComponentDidUpdateee extends React.Component {
//   constructor() {
//     super();
//     console.warn("constructor");
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidUpdate(preprops, prestates, snapshot) {
//     //perstates & preprops are the arguments by this we can check that is previous state and current state are same or different.
//     console.warn("componentDidUpdate", prestates); // due to prestates prob the previous count will be printed in console.
//   }

//   callbackFunction = (
//     id, // the "id" prop of the Profiler tree that has just committed
//     phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
//     actualDuration, // time spent rendering the committed update
//     baseDuration, // estimated time to render the entire subtree without memoization
//     startTime, // when React began rendering this update
//     commitTime, // when React committed this update
//     interactions // the Set of interactions belonging to this update
//   ) => {
//     console.log(id, phase, actualDuration, startTime, commitTime,baseDuration, interactions);
//   };
//   render() {
//     console.warn("render");
//     return (
//       <div>
//         <h1>ComponentDidUpdate {this.state.count}</h1>;
//         <Profiler id="btn" onRender={this.callbackFunction}>
//           <button
//             onClick={() => {
//               this.setState({ count: this.state.count + 1 });
//             }}
//           >
//             Update Name
//           </button>
//         </Profiler>
//       </div>
//     );
//   }
// }
// export default ComponentDidUpdateee;

// ******************************* [ Profiler ]* [react ]***************************************************

// import React , {Profiler }from 'react'

// function Backdrop(props) {

//   mycallbackfun=(id, phase, startTime,commitTime) =>{
//         console.log(id, phase, startTime, commitTime );
//     }

//     return (
//         <div className='backdrop' >
//             <Profiler id='ajnk' onRender={mycallbackfun} >
//             <button onClick={props.closeme}> mala band kara</button>

//             </Profiler>
//         </div>
//     )
// }

// export default Backdrop  ;

// *********************************** [ find duplicate and unique] **[grishma]***************************************************

// let arr = [1, 2, 2, 3, 3, 4, 5, 5];

// //remove duplicate values:Using set
// let arr1 = [...new Set(arr)];
// console.log(arr1)

// //duplicate values

// first method
// let arr2 = arr.filter((value, index) => arr.indexOf(value) != index);
// console.log(arr2);

// find unique values
// function unique1(arr1,arr2){
//     for(let i of arr2){
//             arr1.delete(i)
//         }
//          return arr1
//     }

//     let abc=unique1(arr1,arr2);
//     console.log(abc)

// *************************** [print 1 after 2 / 2 after 4 sec] *************************************************

// const array = [1,2,3,4,5]

// function print(array){
//   for(let i=0;i<=array.length;i++){
//     setTimeout(() => {
//         console.log(i)
//     }, (i*i*1000-1000));
// }
//   }

// print(array)

// **************************************[ print array]*******************************************************

// const array = [1,2,3,4,5,6,7,8,9,10]

// function triangle(array){
//     let arr=[]
//     let neww =arr.toString()
// for(let i=0; i<=array.length;i++){
//     arr.push(i)
//     console.log(arr)
// }
// }
// triangle(array)

// ************************************************************
// const array = [1,2,3,4,5,6,7,8,9,10]

// function printfull(array){
//     let string = "";
//   for(let i=0;i<array.length;i++){
//       for(let j=0;j<array.length;j++){
//         string = string + [i];
//       }
//   }
//   string += "\n";
//   console.log(string)
// }
// printfull(array)

// *******************************[ reverse string ]************************************************

// var string = "i love javascript";

// function reverseBySeparator(string, separator) {
//   return(string.split(separator).reverse().join(separator)) ;

// }

// var reverseEntireSentence = reverseBySeparator(string, "");
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

// console.log(reverseEachWord);

// *******************************[ by shubham ]***********************************************
// var strings = "i love javascript";

// function reversestring(str) {
//   return str.split("").reverse().join("");
// }

// const firstop = reversestring(strings);
// console.log(firstop);

// const secondop = firstop.split(" ").reverse().join(" ")
// console.log(secondop);

// ***************************************[ print num after every 2 sec ]**[ jennifer ]*****************************************************

//  function printnumaftr2sec(){
//    for(let i=0; i<= 20; i++){

//       setTimeout(()=>{
//          console.log(i)
//       },i*2000)

//    }
//  }
//  printnumaftr2sec()

// ***********************************[solve- guess  sequence ]**[jennifer]]**********************************************************

// console.log("first")

// setTimeout(()=>{
//   console.log("second")
// },0)

// let promise = new Promise((res, rej)=>{
//   console.log("third")
//   res("forth")
// })

// promise.then((val)=>{
//   console.log(val)
// })

// setTimeout(()=>{
//   console.log("fifth")
// },10)

// console.log("sixth");

//**********************************[reverse]* [darshan ]*********************************************

// const mystr = " my name is ajinkya"

// const op = mystr.split(" ").reverse().join(" ")
// console.log(op);

// **********************************[ count occurance ]**[darshan ]*************************************************

// const input = ['A','B','C','A','A']

// let output =  input.reduce((acc,curr)=>{
//   if(acc[curr]){
//     acc[curr] = ++acc[curr]
//   }else{
//     acc[curr]=1
//   }
//   return acc
// },{})

// console.log(output);

// ************************************************************
// const a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// let result = { };
// for(var i = 0; i < a.length; i++) {
//     if(result[a[i]]){

//       result[a[i]] = result[a[i]]+ 1;
//     }else{

//       result[a[i]] = 1;
//     }
// }

// console.log(result);

// *****************************[by shubham ]***************************************

// const array = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

// let output= {}
// array.forEach((e)=>{
//   if(output[e]){
//     output[e]++
//   }else{
//     output[e] = 1
//   }
// }
// )
// console.log(output)

// **********************************[find longest word ]**[darshan]***********************************************

// const mystr = "i am ajinkya shinde";

// function findLongestWord(str) {
//   var strSplit = str.split(' ');

//   var longestWord = 0;

//   for(var i = 0; i < strSplit.length; i++){
//     if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//     }
//   }
//   return(longestWord);
// }
// const result = findLongestWord(mystr)
// console.log(result);

// *******************************[find longest word from string]*****************************************************
// //------ [sort method ] --------------
// const str = "I am shubham Pandkar mern stack developer...............";
// const longestword = (str) => {
//   const strarray = str.split(" ");
//   const sortedarray = strarray.sort((a, b) => {
//     return b.length - a.length;
//   });
//   return sortedarray[0];
// };
// console.log(longestword(str));

//---------------[reduce method]---------------
// const str = "I am shubham Pandkar mern stack developer...............";
// function largeword(string) {
//   string = string.split(" ");
//   // string = string.map((word) => word.replace(/\./g, " ")); // regex is used for removing unnecessary characters
//   const longest = string.reduce((current, previous) => {
//     return current.length > previous.length ? current : previous;
//   });
//   return longest;
// }
// const result = largeword(str);
// console.log(result);

// **********************************[find longest word ]**[darshan]***********************************************
// const array = ['i', 'am', 'ajinkya','shinde', 'from', 'pune']

// const abc = array.sort((a,b)=> b.length - a.length)
// console.log(abc)

// const result = abc[0]
// console.log(result);

// *************************************[count letters of word in array ]*[darshan]******************************************************
// const array = ['i', 'am', 'ajinkya','shinde', 'from', 'pune']
// const count = array.map((ele)=> ele.length)
// console.log(count);

// ********************************[addition of numbers in array ]***[darshan]**************************************************
// const array = [1,2,3,4,5]

// const result = array.reduce((acc,curr)=> acc=acc+ curr)
// console.log(result);

// *****************************[reverse string ]***[darshan]**************************************************

// const string = "full stack tutorials"

// const result = string.split("").reverse().join("")
// console.log(result);

// ******************************[curring problem ]***[darshan]*************************************************
// function greeter(a) {
//   return function (b) {
//     console.log(a + " " + b);
//   };
// }

// greeter("hello")("candidate");

// *********************************[ addition without plus operator ] ************************************************************

// function getSum(a, b){
//   while(b!=0){
//     var carry = a&b;  //calculate if is there any carry we need to add
//     a = a^b;   // a is used to hold the sum
//     b = carry<<1;  //b is used to hold left shift carry
//   }
//   return a;
// }

// document.write(getSum(7, 5))

// **************************[Fibonacci series ]**********************************************************
// Fibonacci series
// const number = prompt('enter the number')
// let n1=0 , n2= 1, temp;

// for (let i=1;i<=number;i++){
//     document.write(n1)
//  temp = n1 + n2;

//  n1 = n2;
//  n2 = temp;
// }

// ******************************[ find duplicates]*[ unique ]************************************************

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 2, 1];

const myarray = arr1.concat(arr2);
// console.log(myarray);

function dup(arr) {
  let blank = [];
  for (i of arr) {
    if (blank.indexOf(i) === -1) {
      blank.push(i);
    }
  }
  console.log(blank);
}
dup(myarray);

// ******************************* [ find  longest word ]*************************************************************
// function longestword(str) {
//     const arr = str.split(" ");
//     let longestword = "";

//     for (let word of arr) {
//       if (word.length > longestword.length) {
//         longestword = word;
//       }
//     }
//     console.log(longestword);
//   }
//   longestword("My name is krishnadas");

// *************************************[pattern printing]******************************************
// for (i = 5; i > 0; i--) {
//   for (j = i; j <= 5; j++) {
//     console.log(j);
//     document.write(j);
//   }
//   document.write(`<br>`);
// }

// //OP-
// //5
// // 45
// // 345
// // 2345
// // 12345

//*********************[insert dashes (-) between each two even numbers]******************
// // //025468 the output should be 0-254-6-8.
// var num = window.prompt();
// var str = num.toString();
// var result = [str[0]];

// for (var x = 1; x < str.length; x++) {
//   if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
//     result.push("-", str[x]);
//   } else {
//     result.push(str[x]);
//   }
// }
// console.log(result.join(""));

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@[JSCHALLENGER BY AJINKYA]@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ***************************[ Get nth character of string ]****************************************************

// function myFunction(a, n) {
//   const res = a.split("")

//   const res2 = res[n-1]

//   console.log(res2);
// }

// myFunction("abcd", 1);
// myFunction('zyxbwpl',5)
// myFunction('gfedcba',3)

// ********************************** [Remove first n characters of string ]*********************************

// function myFunction(a) {
//   const res = a.split("")
//   const res2 = res.slice( 3)
//   console.log(res2);
// }

// myFunction("abcdefg");

// ********************************** [Extract first half of string ]*******************************************************************
// function myFunction(a) {
//   let res = a.length /2

//   let res2 = a.slice(0,res)
//   console.log(res2);
// }

// myFunction("abcdefgh");
// myFunction('1234')
// myFunction('gedcba')

// ********************************** [ Return the percentage of a number]*******************************************************************

// function myFunction(a, b) {
//   result = (b / a) *100
//   console.log(result + "%");
// }
// myFunction(100,50)
// myFunction(10,1)
// myFunction(500,25)

// ********************************** [math operators ]*******************************************************************

// function myFunction(a, b, c, d, e, f) {
//    const res = (((((a +b)-c)*d)/e)**f)
//    console.log(res);
// }

// myFunction(6,5,4,3,2,1)
// myFunction(6,2,1,4,2,3)

// *************************************[count occurance ]************************************************************

// function myFunction(ltr,str) {
//     let blank = 0
//  for( let i of str){
//       if(i === ltr){
//           blank++
//       }
//      }

//      console.log(blank);
//  }

// myFunction( 'm', 'how many times does the character occur in this sentence?')

// ******************************************************************************************

// const string = prompt('Enter a string: ');
// const string = "ilovepune"

// const Char = (str) => {
//     const counts = {};
//     for (const i of str) {
//       if (counts[i]) {
//         counts[i]++
//       } else {
//         counts[i] = 1
//       }
//     }
//     return counts;
//   }
//   const result = Char(string)
//   console.log(result);

// *********************************[ Multiplication, division,]*****************************************************
// function myFunction(a, b) {
//     let result = 0
//   if(a < b){
//      result =  a/b
//   }
//   else{
//       result = a* b;
//   }
//   console.log(result);
// }

// myFunction(10, 100);
// myFunction(90, 45)

// ***************************[Check whether a string contains another string and concatenate ]********************************

// function myFunction(a, b) {
//   if(a.includes(b)){
//       const res = b.concat(a)
//       console.log(res);
//   }
//   else{

//     const res2 = a.concat(b)
//     console.log(res2);
//   }
// }

// myFunction("cheese", "cake");
// myFunction('lips', 's')

// ***************************[ Round a number to 2 decimal places ]****************************************************
// function myFunction(a) {
//   const res = a.toFixed(2)
//   console.log(res);
// }
// myFunction(2.12397);
// myFunction(3.136)

// ***************************[ Split a number into its digits ]********************************************************

// function myFunction(a) {
//   const res = a.toString()
//   const res2 = res.split("")
//   console.log(res2);
// }
// myFunction(10);
// myFunction(931)

// ************************* [ Clear up the chaos behind these strings ]*******************************************
// function myFunction(a, b) {
//   let sp = b.split("").reverse().join("")
// //   console.log(sp);

//   const neww = a.concat(sp)
//   const result = neww.replace("%", "")
//   console.log(result);
// }

// myFunction("java", "tpi%rcs");
// myFunction('c%ountry', 'edis')
// myFunction('down', 'nw%ot')

// ************************************[ arrays ]*************************************************************
// ************************************[ Get nth element of array ]******************************************

// function myFunction(a, n) {
//   const res= a[n-1]
//   console.log(res);
// }

// myFunction([1, 2, 3, 4, 5], 3);
// myFunction([10,9,8,7,6],5)
// myFunction([7,2,1,6,3],1)

// ************************************[ Remove first n elements of an array ]*************************************

// function myFunction(a) {
//   const aaa = a.slice(3)
//   console.log(aaa);
// }
// myFunction([1, 2, 3, 4]);
// myFunction([5,4,3,2,1,0,5,8,7])
// ************************************[ arrays ]*************************************************************

// function myFunction(a, n) {
//   const res = a.slice(-n)
//   console.log(res);
// }

// myFunction([1, 2, 3, 4, 5], 2);
// myFunction([1, 2, 3], 6)
// myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)

// ********************************[ Remove a specific array element ]*******************************************

// function myFunction(a, b) {

//     arr = a.filter(item => item !== b)

//     console.log(arr)
// }

// myFunction([1,2,3], 2)
// myFunction([1,2,'2'], '2')
// myFunction([false,'2',1], false)
// myFunction([1,2,'2',1], 1)

// *************************************[Count number of elements in JavaScript array]************************

// function myFunction(a) {
//   const res= a.length;
//   console.log(res);
// }

// myFunction([1, 2, 2, 4]);
// myFunction([9,9,9])
// myFunction([4,3,2,1,0])

// ******************************[ Count number of negative values in array ]******************************************

// function myFunction(a) {
//     let result = 0
//   for(let i of a){
//       if(i < 0){
//           result++
//       }
//   }
//   console.log(result);
// }

// myFunction([1, -2, 2, -4]);
// myFunction([0,9,1])
// myFunction([4,-3,2,1,0])

// ***********************************[ sort ]***********************************************

// function myFunction(a) {
//   const res= a.filter((a,b)=> a-b)
//   console.log(res);
// }

// myFunction([1,3,2])

// *****************************[ sort ]*************************************
// function myFunction(arr){
//  for(let i=0; i<arr.length;i++){
//      for(let j=0; j<arr.length;j++){
//          if(arr[i]<arr[j]){
//              let temp = arr[i]
//              arr[i] = arr[j]
//              arr[j] =temp
//          }
//      }
//  }
//  console.log(arr)
// }
//  myFunction([1,3,2])
//  myFunction([4,2,3,1])
// myFunction([10,100,40])

// *****************************[ Return the longest string from an array of strings ]**********************************

// function myFunction(arr) {
//     let long = ""
//   for(let i of arr){
//       if(i.length > long.length){
//           long = i
//       }
//   }
//   console.log(long);
// }

// myFunction(["help", "me"]);
// myFunction(['I', 'need', 'candy'])

// ***************************[ Merge two arrays with duplicate values ]***************************************

// function myFunction(a, b) {
//   const res = a.concat(b);
//   //   console.log(res);
//   let blank = [];
//   for (let i of res) {
//     if (blank.indexOf(i) === -1) {
//       blank.push(i);
//     }
//   }
//   console.log(blank);
// }

// myFunction([1, 2, 3], [3, 4, 5]);
// myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])

// ******************** [ Sum up all array elements with values greater than ]**********************************

// function myFunction(a, b) {
//   const qqq = a.filter((ele)=> ele> b).reduce((acc, curr)=> acc= acc + curr)
//   console.log(qqq);
// }

// myFunction([1, 2, 3, 4, 5, 6, 7], 2);
// myFunction([-10, -11, -3, 1, -4], -3)

// ********************[ Create a range of numbers ]*********************************************

// function myFunction(min, max) {
//    let myarray = []
//   for(let i =min ; i<=max ; i++){
//    myarray.push(i)

//   }
//   console.log(myarray)
// }

// myFunction(2, 10);
// myFunction(-5, 5)

//################################### [ objects ]##################################################

// *********************************** [ Accessing object properties one ]*************************
// function myFunction(obj) {

//   console.log(obj.country)
// }

// myFunction({ continent: "Asia", country: "Japan" });

// ************************ [ Accessing object properties ]***************************************

// function myFunction(obj) {
//   console.log(obj.A);
// }

// myFunction({ one: 1, "prop-2": 2, A:155 });

//**********************************[getting values from array of objects] [ajinkya]********************************/
// //********[print the titles of id-3 & id-4]******
// var dashCard = [
//   {
//     id: 1,
//     colorDark: "rgb(142 142 255)",
//     title: "Language",
//     language: "English",
//     icon: "language_img",
//     approver: "john@ey.com",
//   },
//   { id: 2, colorDark: "rgb(251 244 185)", title: "Data", icon: "data_img" },
//   {
//     id: 3,
//     colorDark: "rgb(191 247 110)",
//     title: "Translation",
//     icon: "translation_img",
//   },
//   {
//     id: 4,
//     colorDark: "rgb(191 247 110)",
//     title: "Bank Translation",
//     icon: "translation_img",
//   },
// ];

// const abc = dashCard.filter((ele) => ele.id > 2).map((elem) => elem.title);
// console.log(abc);

//****************************[map , filter , reduce - array of ojects]*********************************/
const employees = [
  {
    id: 101,
    name: "john",
    profile: "senior developer",
    rating1: 5,
    rating2: 10,
  },
  {
    id: 102,
    name: "peter",
    profile: "junior developer",
    rating1: 8,
    rating2: 10,
  },
  {
    id: 103,
    name: "alisha",
    profile: "senior developer",
    rating1: 8,
    rating2: 7,
  },
  {
    id: 104,
    name: "daniel",
    profile: "junior developer",
    rating1: 7,
    rating2: 10,
  },
  {
    id: 105,
    name: "sahil",
    profile: "senior developer",
    rating1: 6,
    rating2: 10,
  },
];

const totalscore = employees
  .filter((emp) => emp.profile === "senior developer")
  .map((emp) => emp.rating1 + emp.rating2)
  .reduce((acc, cur) => (acc += cur));
console.log(totalscore);

// achieve totalrating of senior developers by using reduce only
const toatlseniorrating = employees.reduce((acc, cur) => {
  if (cur.profile === "senior developer") {
    acc += cur.rating1 + cur.rating2;
  }
  return acc;
}, 0);
console.log(toatlseniorrating);

//****************************************************************************
