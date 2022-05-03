// the hello world program
// alert("Hello, World!");

// the hello world program
// document.write('Hello, World!');
// console.log("hello world");

// *******************************************************************************************
// // addition of two numbers
// // store input numbers
// const num1 = Number(prompt('Enter the first number '));
// const num2 = Number(prompt('Enter the second number '));

// // add two numbers
// const sum = num1 + num2;

// // display the sum
// document.write(`The sum of ${num1} and ${num2} is ${sum}`);

// // parseInt  and  is for whole numbers
// // parseFloat is for decimal numbers
// // Number is for both decimal and whole numbers

// *******************************************************************************************
// // // take the input from the user
// const number = prompt('Enter the number: ');

// const result = Math.sqrt(number);  // inbuilt function
// document.write(`The square root of ${number} is ${result}`);
// *******************************************************************************************
// // // //calculate area of triangle
// const baseValue = prompt('Enter the base of a triangle: ');
// const heightValue = prompt('Enter the height of a triangle: ');

// // // calculate the area
// const areaValue = (baseValue * heightValue) / 2;

// document.write(`The area of the triangle is ${areaValue}`);

// *******************************************************************************************
// JavaScript program to find the area of a tridocument.write
// *******************************************************************************************
// // //JavaScript program to swap two variables

// // // take input from the users
// let a = prompt('Enter the first variable: ');
// let b = prompt('Enter the second variable: ');

// // //create a temporary variable
// let temp;

// // //swap variables
// temp = a;
// a = b;
// b = temp;

// document.write(`The value of a after swapping: ${a}`);
// document.write(`The value of b after swapping: ${b}`);

// *******************************************************************************************

// // //JavaScript program to swap two variables by destructuring

// // take input from the users
// let a = prompt('Enter the first variable: ');
// let b = prompt('Enter the second variable: ');
// let c = prompt('Enter the third variable: ');

// //using destructuring assignment
// [a, b, c] = [c, b, a];

// document.write(`The value of a after swapping: ${a}`);
// document.write(`The value of b after swapping: ${b}`);
// document.write(`The value of c after swapping: ${c}`);

// *******************************************************************************************
// //JavaScript program to swap two variables by using arithmatdocument.write

// //take input from the users
// let a = parseInt(prompt('Enter the first variable: '));   //10
// let b = parseInt(prompt('Enter the second variable: '));   //20

// // addition and subtraction operator
// a = a + b;  //30
// b = a - b;   //10
// a = a - b;   //20

// document.write(`The value of a after swapping: ${a}`);
// document.write(`The value of b after swapping: ${b}`);

// *******************************************************************************************
// // covert kilometers to miles
// // taking kilometers input from the user
// const kilometers = prompt("Enter value in kilometers: ")

// // conversion factor
// const factor = 0.621371

// // calculate miles
// const miles = kilometers * factor

// document.write(`${kilometers} kilometers is equal to ${miles} miles.`);

// *******************************************************************************************
// // convert celcius to fahrenheit
// const celcius = prompt('enter the celcius value');

// const fahrenheit = (celcius * 1.8) + 32;

// document.write(`the converted value of ${celcius} is ${fahrenheit}`);

// *******************************************************************************************
// // generating  a random number
// const a = Math.random();
// document.write(a);
// *******************************************************************************************
// // program that checks if the number is positive, negative or zero
// // input from the user
// const number = parseInt(prompt("Enter a number: "));

// // check if number is greater than 0
// if (number > 0) {
//     document.write("The number is positive");
// }

// // check if number is 0
// else if (number == 0) {
//     document.write("The number is zero");
// }

// // if number is less than 0
// else {
//     document.write("The number is negative");
// }

// *******************************************************************************************
// const number = prompt('enter a number')

// if(number % 2 == 0){
// document.write('number is even');
// }
// else{
//  document.write('no. is odd')
// }
// *******************************************************************************************
// const num = prompt("enter a num")

// const result = (num % 2 == 0 ? "even" : "odd");  // ( condition ? true : false)

// document.write(`the num is ${result}`)
// *******************************************************************************************
// // program to find the largest among three numbers

// // take input from the user
// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const num3 = parseFloat(prompt("Enter third number: "));
// let largest;

// // check the condition
// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }

// // display the result
// document.write("The largest number is " + largest);

// *******************************************************************************************
// // program to find the largest among three numbers

// // take input from the user
// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const num3 = parseFloat(prompt("Enter third number: "));

// const result = Math.max(num1, num2, num3);

// document.write(`the maximum no. is ${result}`)

// *******************************************************************************************
// // program to check if a number is prime or not

// // take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     document.write("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         document.write(`${number} is a prime number`);
//     } else {
//         document.write(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     document.write("The number is not a prime number.");
// }
// *******************************************************************************************
// // program to print prime numbers between the two numbers
// //
// // take input from the user
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// // looping from lowerNumber to higherNumber
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }
// *******************************************************************************************
//     // program to find the factorial of a number

//     // take input from the user
//     const number = parseInt(prompt('Enter a positive integer: '));

//     // checking if number is negative
//     if (number < 0) {
//             document.write('Error! Factorial for negative number does not exist.');
//         }

//         // if number is 0
//         else if (number === 0) {
//                 document.write(`The factorial of ${number} is 1.`);
//             }

//             // if number is positive
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact = fact * i;
//     }
//     document.write(`The factorial of ${number} is ${fact}.`);
// }

// *******************************************************************************************
// const number = (prompt("enter the number"));

// for (let i = 1; i <= 10; i++) {
//     const result = i * number;
//     // document.write(`${number} * ${i} is ${result}<br>`);
//     console.log(result)
// }

// *******************************************************************************************

// const num = prompt('enter number')
// i = 0;
// while ( i < 10){
//     i++;
//     console.log([i] * num);

// }

// *******************************************************************************************
// Fibonacci series
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
// *******************************************************************************************
// // program for a simple calculator

// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = (prompt('Enter first number: '));
// const number2 = (prompt('Enter second number: '));

// let result;

// // using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// // display the result
// document.write(`${number1} ${operator} ${number2} = ${result}`);

// *******************************************************************************************
// // program to display the sum of natural numbers
// const number = prompt('enter the number')
// let sum = 0;
// for(let i=1;i<=number;i++){

//  sum = sum + i;
// }
// document.write(`the sum of all numbers is${sum}`)

// *******************************************************************************************
// // program to display the sum of natural numbers using while loop
// const number = prompt('enter the number')
// let sum = 0 , i=1;

// while(i<= number){
//     sum = sum + i;
//     i++;

// }
// document.write(`the sum of all numbers is ${sum}`)
// *******************************************************************************************
// // program to display the multiplication of natural numbers using while loop
// const number = prompt("enter the number")

// let mul = 1 , i=1;

// while(i<=number){
//     mul = mul*i;
//     i++;

// }
// document.write(`the multiplication of all numbers is ${mul}`)

// *******************************************************************************************
// // Numbers Have Same Last Digit
// const a = prompt("enter the first number")
// const b = prompt("enter the second number")
// const c = prompt("enter the third number")

// const result1 = a % 10;
// const result2 = b % 10;
// const result3 = c % 10;

// if (result1 == result2 && result1 == result3){
//  document.write('all numbers having same last digit')
// }
// else{

//     document.write('not having same last digits ')
// }

// *******************************************************************************************

// // program to find the factors of an integer
//  const number = prompt('enter the number')

//  for(i=1; i<=number; i++){
//      if (number % i == 0)

//      document.write(`the factors is ${i}<br>`)
//  }

// *******************************************************************************************
// // program to check if the string is palindrome or not
// // take input
// const string = prompt("Enter a string: ");

// // call the function
// const value = checkPalindrome(string);

// function checkPalindrome() {
//   // find the length of a string
//   const len = string.length;

//   // loop through half of the string    nitin
//   for (let i = 0; i < len / 2; i++) {
//     // check if first and last string are same
//     if (string[i] !== string[len - 1 - i]) {
//       return "It is not a palindrome";
//     }
//   }
//   return "It is a palindrome";
// }

// document.write(value);
// *******************************************************************************************
// // program to check if the string is palindrome or not by inbuilt functions

// const string = prompt('enter the string')

// const strsplit = string.split('')

// const reverse = strsplit.reverse();

// reversestr = reverse.join('');

// if(string == reversestr){
//  document.write(" string is palindrome")
// }
// else{

//     document.write(" string is not palindrome")
// }
// *******************************************************************************************
// // program to sort words in alphabetical order

// const sentence = prompt('enter the sentence')

// words = sentence.split('')

// alpha = words.sort();

//  document.write(alpha)
// *******************************************************************************************
// // program to replace a character of a string (here we replace only 1st occurence )

// const sentence = prompt('enter the sentence')

// const newsen = sentence.replace('good' , 'bad')

// document.write(newsen)
// **********************************************x*********************************************
// // program to replace a character of a string (here we replace all occurence )
//  const sentence = prompt('enter the sentence')

//  const regex = /good/g

//  newsen = sentence.replace(regex, 'bad')
//  document.write(newsen)
// *******************************************************************************************
// // // program to reverse a string
// const string = prompt('enter the sentence')

// function reversestr(str){
//     let newstr = "";
//     for(let i = str.length-1; i>=0; i--){
//         newstr = newstr + str[i]

//     }
//     console.log(newstr) ;
// }

//  reversestr(string);

// *******************************************************************************************
// *******************************************************************************************
// // program to reverse a string using in built method
// const string = "hi i am ajinkya shindeeeee"

// function reversestr(string){
//     const ArrStr = string.split("")

//     const rev = ArrStr.reverse()

//     const newArr = rev.join('')

//     return newArr;
//     // console.log(newArr)
// }

// const result = reversestr(string);
// document.write(result)
// *******************************************************************************************
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// ********************************** OBJECTS *************************************************
// program to create JavaScript object using object literal
// const person = {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
//     greet: function() {
//         console.log('Hello everyone.');
//     },
//     score: {
//         maths: 90,
//         science: 80
//     }
// };

// document.write(typeof person); // object

// // accessing the object value
// // document.write(person.name);
// // document.write(person.hobbies[1]);
// // person.greet();
// // document.write(person.score.maths);
// // console.log(person.hobbies[2])
// *******************************************************************************************
// Create an Object using Instance of Object Directly
// const person = new Object ( {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
//     greet: function() {
//         console.log('Hello everyone.');
//     },
//     score: {
//         maths: 90,
//         science: 80
//     }
// });

// document.write(typeof person); // object

// // accessing the object value
// document.write(person.name);
// document.write(person.hobbies[0]);
// person.greet();
// document.write(person.score.maths);
// *******************************************************************************************
// // Create an object using Constructor Function

// function Person() {
//     this.name = 'John',
//     this.age = 20,
//     this.hobbies = ['reading', 'games', 'coding'],
//     this.greet = function() {
//         console.log('Hello everyone.');
//     },
//     this.score = {
//         maths: 90,
//         science: 80
//     }

// }

// const person = new Person();

// document.write(typeof person); // object

// // accessing the object value
// // document.write(person.name);
// // document.write(person.hobbies[2]);
// // person.greet();
// // document.write(person.score.maths);
// *******************************************************************************************
// // program to check the number of occurrence of a character
// const string = prompt('Enter a string: ');
// const letterToCheck = prompt('Enter a letter to check: ');

// function countstr(string, letterToCheck){
//     let count = 0;
//     for(let i=0;i<=string.length;i++){
//      if(string.charAt(i)== letterToCheck){
//       count = count +1;
//      }
//     }
//    return count;
// }
// const result = countstr(string, letterToCheck)

// document.write(result)
// *******************************************************************************************
// // program to check the occurrence of a character

// // take input from the user
// const string = prompt('Enter a string: ');
// const letterToCheck = prompt('Enter a letter to check: ');

// //passing parameters and calling the function

// function countString(str, letter) {

//     // creating regex
//     const re = new RegExp(letter, 'g');

//     // matching the pattern
//     const count = str.match(re).length;

//     return count;
// }
// const result = countString(string, letterToCheck);

// // displaying the result
// document.write(result);
// *******************************************************************************************
// // program to convert first letter of a string to uppercase

// const string = prompt('enter the string')

// function capitalizedFirstLetter(string){
//     const capital = string.charAt(0).toUpperCase()+ string.slice(1)
//     return capital;
// }
// const result = capitalizedFirstLetter(string)
// document.write(result)
// *******************************************************************************************
//  const string = prompt('enter the string')

//  function countVowels(string){
//    const count = string.match(/[aeiou]/gi)
//    console.log(count.length)
//  }

//  countVowels(string)
//  document.write(output);
// *******************************************************************************************

// let namee = "Ajinkyaaa"
// let vowels = ['a','e','i','o','u']

// function find(str){
//     let count = 0
//  for(let i of str.toLowerCase()){
//   if(vowels.includes(i)){
//       count++
//   }
//  }
//  console.log(count);
// }
// find(namee)
// *******************************************************************************************
// // program to count the number of vowels in a string
// // take input
// const string = prompt('Enter a string: ');
// // defining vowels
// const vowels = ["a", "e", "i", "o", "u"]

// function countVowel(str) {
//     // initialize count
//     let count = 0;

//     // loop through string to test if each character is a vowel
//     for (let i of str.toLowerCase()) {
//         if (vowels.includes(i)) {
//             count++;
//         }
//     }

//     // return number of vowels
//     return count
// }

// const result = countVowel(string);

// document.write(result);

// *******************************************************************************************

// // program to remove a property from an object

// // creating an object
// const student = {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
//     greet: function() {
//         console.log('Hello everyone.');
//     },
//     score: {
//         maths: 90,
//         science: 80
//     }
// };

// // deleting a property from an object
// // delete student.greet;
// // delete student['score'];
// // delete  student.age;
// console.log(student);
// *******************************************************************************************

// // program to check if a string starts with 'S' and ends with 'G'
// const string = prompt('Enter a string: ');

// function checkString(str) {

//     // check if the string starts with S and ends with G
//     if(str.startsWith('S') && str.endsWith('G')) {
//         document.write('The string starts with S and ends with G');
//     }
//     else if(str.startsWith('S')) {
//         document.write('The string starts with S but does not end with G');
//     }
//      else if(str.endsWith('G')) {
//         document.write('The string starts does not with S but end with G');
//     }
//     else {
//         document.write('The string does not start with S and does not end with G');
//     }
// }

// checkString(string);
// *******************************************************************************************
// // program to check if a key exists

// const person = {
//     id: 1,
//     name: 'John',
//     age: 23
// }

// const present = 'name' in person;

// if(present){
//     document.write('key is present in object')
// }
// else{
//     document.write('key is not present in object')
// }
// *******************************************************************************************
// // program to check if a key exists

// const person = {
//     id: 1,
//     name: 'John',
//     age: 23
// }

// //check if key exists
// const hasKey = person.hasOwnProperty('name');

// if(hasKey) {
//     console.log('The key exists.');
// }
// else {
//     console.log('The key does not exist.');
// }
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************
// // JavaScript Program to Clone a JS Object
// const person = {
//     name: 'John',
//     age: 21,
// }
// const copy = person;
// console.log(copy);
// console.log(copy);
// console.log(copy);
// *******************************************************************************************
// // program to clone the object using object.assign()

// // declaring object
// const person = {
//     name: 'John',
//     age: 21,
// }

// // cloning the object
// const clonePerson = Object.assign({}, person);

// console.log(clonePerson);

// // changing the value of clonePerson
// clonePerson.name = 'Peter';

// console.log(clonePerson.name);
// console.log(person.name);
// // The Object.assign() method is part of the ES6 standard.
// // The Object.assign() method performs deep copy and copies all the properties from one or more objects.

// // Note: The empty {} as the first argument ensures that you don't change the original object.
// *******************************************************************************************
// // program to clone the object in spread operator syntax
// // declaring object
// const person = {
//     name: 'John',
//     age: 21,
// }
// console.log(person);

// // cloning the object
// const neww = { ... person}

// console.log(neww);

// // changing the value of clonePerson
// neww.name = 'ajinkya';

// console.log(neww.name);
// console.log(person.name);
// *******************************************************************************************
// // program to clone the object using json.parse
// // declaring object
// const person = {
//     name: 'John',
//     age: 21,
// }

// // cloning the object
// const clonePerson = JSON.parse(JSON.stringify(person));

// console.log(clonePerson);

// // changing the value of clonePerson
// clonePerson.name = 'Pettter';

// console.log(clonePerson.name);
// console.log(person.name);
// *******************************************************************************************
// // // program to loop through an object using for...in loop

// const student = {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };

// for(let key in student){
//    let value;

//    value = student[key]

//    console.log(key +" "+ value)
// }
// // In the above example, the for...in loop is used to loop through the student object.

// // The value of each key is accessed by using student[keyabc].
// *******************************************************************************************
// //  Merge Property of Two Objects Using Object.assign()
// // program to merge property of two objects

// // object 1
// const person = {
//     name: 'ajinkya',
//     age:28
// }

// // object 2
// const student = {
//     gender: 'male',
//     city: 'pune'
// }

// // merge two objects
// const newobj = Object.assign(person, student);

// console.log(newobj);
// *******************************************************************************************
// // Merge Property of Two Objects Using Spread Operator

// // object 1
// const person = {
//     name: 'nikki',
//     age:26
// }

// // object 2
// const student = {
//     gender: 'female',
//     state: 'goa'
// }

// const newobj = {...person, ...student}

// console.log(newobj);

//  //In the above example, two objects are merged together using the spread operator
// // In both the above examples, if the two objects have the same key,
//  // then the second object's key overwrites the first object's key.
// *******************************************************************************************

// // program to count the number of keys/properties in an object

// const student = {
//     name: 'eva',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
//     city : 'mumbai'
// };

// let count = 0;

// for(let key in student){
//     count++;
// }
// document.write(count)

// *******************************************************************************************
// // program to count the number of keys/properties in an object Using Object.keys()

// const student = {
//     name: 'tanya',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };

// // count the key/value
// const result = Object.keys(student).length;

// document.write(result)
// *******************************************************************************************
// // program to add a key/value pair to an object

// const person = {
//     name: 'jessicca',
//     age: 25,
//     gender: 'female'
// }

// // add a key/value pair
// person.city = 'satara'
// person.state = 'goa'

// console.log(person)
// *******************************************************************************************

// // program to add a key/value pair to an object Using Square Bracket Notation

// const person = {
//     name: 'jessicca',
//     age: 22,
//     gender: 'female'
// }

// // add a key/value pair
// person['profession'] = 'teacher'
// person['state'] = 'punjab'
// console.log(person)

// *******************************************************************************************
// // // program to replace all occurrence of a string

// const string = 'hare ram hare Ram ram ram hare hare';
// console.log(string)

// // regex expression

// const regex = /ram/gi;
// // replace the characters
// const newText = string.replace(regex, 'krishna')

// // display the result
// //  console.log(regex);
// document.write(newText);
// *******************************************************************************************
// // Replace All Occurrence of String Using built-in Method (split n join)

// const string = 'hare ram hare ram ram ram hare hare';
// console.log(string)

// const newText  = string.split('ram').join('krishnaa')

// document.write(newText)
// *******************************************************************************************
// // program to create a multiline strings

// // using the + operator
// const message = 'This is a long message\n' +'that spans across multiple lines\n' +'in the code.'
// console.log(message);

// // In the above example, a multiline string is created using the + operator and \n.

// // The escape character \n is used to break the line.

// *******************************************************************************************
// // Create Multiline Strings Using \
// // program to create a multiline strings

// // using the \ operator
// const message = 'This is a long message\n \
// that spans across multiple lines\n \
// in the code.'

// console.log(message);
// document.write(message);

// *******************************************************************************************

// // program to create a multiline strings Using Template Literal

// // using the template literal

// const message = `This is a long message
// that spans across multiple lines
// in the code.`

// console.log(message);
// document.write(message);

// *******************************************************************************************
// // program to generate random strings

// // declare all characters
// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generateString(length) {
//     let result = ' ';
//     // const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }

//     return result;
// }

// document.write(generateString(55));
// *******************************************************************************************
// // program to check if a string starts with another string

// const str = prompt('enter the string');
// const chkStr = prompt('enter value to be search')

// if(str.startsWith(chkStr)){
//     document.write('string starts with searched value')

// }
// else{

//     document.write('string not starts with searched value')
// }

// *******************************************************************************************
// // program to check if a string starts with another string using regex

// const string = 'hello world';

// const pattern = /^he/;

// let result = pattern.test(string);

// if(result) {
//     console.warn('The string starts with "he".');
// }
// else {
//     console.warn(`The string does not starts with "he".`);
// }
// *******************************************************************************************
// // program to trim a string

// const string = '      Hello World       ';

// const result = string.trim("");

// document.write(result);
// *******************************************************************************************
// // program to trim a string using regex

// function trimString(x) {
//     let trimValue = x.replace(/^\s+|\s+$/g,'');
//     return trimValue;
// }

// const result = trimString('    Hello world    ');
// document.write(result);
// *******************************************************************************************
// // program to convert an object to a string

// const person = {
//     name: 'Jack',
//     age: 27
// }

// const result =  JSON.stringify(person);

// console.log(result);
// console.log(typeof result);
// *******************************************************************************************

// // program to convert an object to a string

// const person = {
//     name: 'Jack',
//     age: 27,
//     city: 'pune'
// }
// console.log(person)
// const result1 = String(person);
// const result2 = String(person['city']);

// console.log(result1)
// console.log(typeof result1)
// // console.log(result2)
// // console.log(typeof result2)
// *******************************************************************************************
// //program to check if a string contains a substring
// const str = prompt('enter the string')

// const search = prompt('enter the search value')

// if(str.includes(search)){
//  document.write('result found')
// }
// else{
//  document.write('result not found')
// }
// *******************************************************************************************
// // program to check if a string contains a substring using indexOf

// // take input
// const str = prompt('Enter a string:');
// const checkString = prompt('Enter a string that you want to check:');

// // check if string contains a substring
// if(str.indexOf (checkString) !== -1){
//  document.write('result found')
// }
// else{
// document.write('result not found')
// }
// *******************************************************************************************
// const str1= prompt('enter the 1st string')
// const str2= prompt('enter the 2nd string')

// const result = str1.toUpperCase() === str2.toUpperCase();

// if(result){
//     document.write('both strings are similar')
// }
// else{
//     document.write('not similar')
// }

// *******************************************************************************************
// // program to perform string comparison using regex

// const string1 = 'JavaScript Program';
// const string2 = 'javascript program';

// // create regex
// const pattern = new RegExp(string1, "gi");

// // compare the stings
// const result = pattern.test(string2)

// if(result) {
//     console.log('The strings are similar.');
// } else {
//     console.log('The strings are not similar.');
// }
// *******************************************************************************************
// // program to replace all instances of a character in a string using regex

// const string = prompt('enter the string');

// const result = string.replace(/a/g, 'A');

// document.write(result);

// *******************************************************************************************
// // program to replace all instances of character in a string using split()

// const string = prompt('enter the string');

// const splitStr = string.split('a');

// const joinStr = splitStr.join('A');

// document.write(joinStr)

// *******************************************************************************************
// // program to replace all line breaks in a string with <br> using regex
// const string = `I am Learning JavaScript.
// JavaScript is fun.
// JavaScript is easy.`;

// const result = string.replace(/(\r\n|\r|\n)/g, '<br>');

// console.log(result);
// *******************************************************************************************
// // program to replace all line breaks in a string with <br>
// const string = `I am Learning JavaScript.
// JavaScript is fun.
// JavaScript is easy.`;

// const result = string.split('\n').join("");

// console.log(result);

// *******************************************************************************************
// *******************************************************************************************
// // program to display new date
// const date = new Date(2021, 10, 4, 11, 10, 15);

// const n = date.toDateString();

// const time = date.toLocaleTimeString();

// document.write('date:', n)
// document.write('time:', time)

// *******************************************************************************************
// // program to check leap year using if else
// const year = prompt('enter a year');

// function checkLeapYear(year){
// if((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)){
// document.write(`${year} is leap year`)
// }
// else{
//     document.write(`${year} is not a leap year`)

// }
// }
// checkLeapYear(year)
// *******************************************************************************************
// // program to check leap year using new date()
// function checkLeapYear(year) {

//     const leap = new Date(year, 1, 29).getDate() === 29;
//     if (leap) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// const year = prompt('Enter a year:');

// checkLeapYear(year);

// *******************************************************************************************

// // program to display the date
// // get local machine date time
// const date = new Date ();

// const n= date.toDateString();

// const time = date.toLocaleTimeString();

// document.write(n)
// document.write(time)

// *******************************************************************************************

// // program to create a countdown timer

// // time to countdown from (in milliseconds)
// let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

// // countdown timer
// let x = setInterval(function() {

//     // get today's date and time in milliseconds
//     let now = new Date().getTime();

//     // find the interval between now and the countdown time
//     let timeLeft = countDownDate - now;

//     // time calculations for days, hours, minutes and seconds
//     const days = Math.floor( timeLeft/(1000*60*60*24) );
//     const hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
//     const minutes = Math.floor( (timeLeft/1000/60) % 60 );
//     const seconds = Math.floor( (timeLeft/1000) % 60 );

//     // display the result in the element with id="demo"
//     console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

//     // clearing countdown when complete
//     if (timeLeft < 0) {
//         clearInterval(x);
//         console.log('CountDown Finished');
//     }
//     }, 2000);

// *******************************************************************************************
// // program to check if an array contains a specified value

// const array = ['you', 'will', 'learn', 'javascript'];

// const hasValue = array.includes('javascript');

// // check the condition
// if(hasValue) {
//     console.log('Array contains a value.');
// } else {
//     console.log('Array does not contain a value.');
// }
// *******************************************************************************************

// // program to check if an array contains a specified value using indexOf()

// const array = ['you', 'will', 'learn', 'javascript'];

//  const hasValue = array.indexOf('will')!== -1;

//  if(hasValue){
//      document.write('array contains searched value')
// }
// else{
//      document.write('array doesnt contains searched value')

//  }

// *******************************************************************************************
// // program to insert an item at a specific index into an array
//  function insertElement() {
//     let array = [1, 2, 3, 4, 5]
//     // index to add to
//     const index = prompt('enter the index ')

//     // element that you want to add
//     const element = prompt('enter the value to insert')

//     array.splice(index, 0, element);
//     return array;
// }

// const result = insertElement();
// document.write(result)
// *******************************************************************************************
// // program to append an object to an array using push

// // original array
// let array = [1, 2, 3];

// // object to add
// let object = {x: 12, y: 8};

// function insertObject(arr, obj) {

//         // append object
//     arr.push(obj);

//     console.log(arr);
// }

// // call the function
// insertObject(array, object);
// *******************************************************************************************
// // program to append an object to an array using splice

// function insertObject(arr, obj) {

//     // find the last index
//     //  let index = arr.length;
//      let index = 2;

//      // appending object to end of array
//      arr.splice(index, 0, object);

//      console.log(arr);
//  }

//  // original array
//  let array = [1, 2, 3, 4, 5];

//  // object to add
//  let object = {x: 12, y: 8};

//  // call the function
//  insertObject(array, object);
// *******************************************************************************************
// // program to append an object to an array using spread operator

//  // original array
//  let array = [1, 2, 3];

//  // object to add
//  let object = {x: 12, y: 8};

// function insertObject(arr, obj) {

//     // append object
//      arr = [...arr, obj];

//      console.log(arr);
//  }

//  // call the function
//  insertObject(array, object);
// *******************************************************************************************
// // program to check if an object is an array

// const abc = [1, 2, 3, 4, 5];

// function chkObj(arr) {
//   const result = Array.isArray(arr);
//   if (result) {
//     document.write("is an array");
//   } else {
//     document.write("is not an array");
//   }
// }

// chkObj(abc);
// *********************************************************************************************
// // program to empty an array
// const array = [1,2,3,4,5,6]
// // console.log(array)

// function emptyArray(arr){
//  arr = [];
//  return arr;

// }
// const result = emptyArray(array)
// document.write(result)
// *******************************************************************************************
// program to append an object to an array using splice
// const array = [1, 2 ,3 ,4 ,5, 6, 7, 8, 9];
// console.log(array);

// function emptyArray(arr) {

//     // substituting new array
//     arr.splice(0, arr.length);

//     return arr;
// }

// // call the function
// const result = emptyArray(array);
// console.log(result);
// *******************************************************************************************
// // program to empty an array by setting arragth.length to 0

// const array = [1, 2 ,3];
// // console.log(array);

// function emptyArray(arr) {

//     // setting array length to 0
//     arr.length = 0;

//     return arr;
// }

// // call the function
// const result = emptyArray(array);
// console.log(result);
// *******************************************************************************************
// // program to add element to an array using unshift

// const abc = [1, 2, 3, 4, 5]

// function addNew(arr){

//      arr.unshift(8);
//      console.log(arr)
// }
// addNew(abc);

// *******************************************************************************************
//  // program to add element to an array uusing array. splice
// const abc = [1, 2, 3, 4, 5]

// function addNew(arr){
// arr.splice(0, 0, 7);
// console.log(arr)
// }
// addNew(abc);
// The first argument is the index of an array where you want to add an element.
// The second argument is the number of elements that you want to remove from the index element.
// The third argument is the element that you want to add to the array.
// *******************************************************************************************

// //  // program to add element to an array using spread operator

// const abc = [1, 2, 3, 4, 5]
// console.log(abc)

// function addNew(arr){
// arr = [9,...arr];
// console.log(arr)
// }
// addNew(abc)
// *******************************************************************************************
// //  // program to add element to an array using concat[]

// const abc = [1, 2, 3, 4, 5]
// console.log(abc)

// function addNew(arr){
// arr = [8].concat(arr);
// console.log(arr)
// }

// addNew(abc);
// *******************************************************************************************
// // // program to remove duplicate value from an array Using indexOf() and push()

// const abc = [1, 2, 3, 2, 3, 4, 5, 2];

// function getUnique(arr){

//     let result = [];

//     // loop through array
//     for(let i of arr) {
//         if(result.indexOf(i) === -1) {
//             result.push(i);
//         }
//     }
//     console.log(result);
// }

// getUnique(abc);

// *******************************************************************************************
// // program to remove duplicate value from an array Using set()

// const abc = [1, 2, 3, 2, 3 ,3, 5];

// function getUnique(arr){
//  let result = new Set (arr)
//  console.log(result)
// }
// getUnique(abc)

// In the above program, Set is used to remove duplicate items from an array.

// A Set is a collection of unique values.

// *******************************************************************************************
// program to merge and remove duplicate value from an array Using concat() and for Loop

// const array1 = [1, 2, 3];
// const array2 = [4, 2, 1]

// function uniqueInBoth(arr1, arr2){

//     let merge = arr1.concat(arr2);
//     // console.log(merge);
//     let common = []
//     for(let i of merge){
//         if(common.indexOf(i) === -1){
//          common.push(i);
//         }
//     }
//    console.log(common);
// }
// uniqueInBoth(array1,array2)

// The two arrays are merged using the concat() method.
// The for...of loop is used to loop through all the elements of arr.
// The indexOf() method returns -1 if the element is not in the array.

// ....Hence, during each iteration, if the element equals -1,
// the element is added to the uniqueArr array using the push() method.
// *******************************************************************************************
// // // program to merge and remove duplicate value from an array  using spread operator

// const array1 = [1, 2, 3];
// const array2 = [4, 2, 1, 5]

// function uniqueinboth(arr1, arr2){
// let merge = [...arr1, ...arr2]

// let common =new Set(merge)
// console.log(common)
// }
// uniqueinboth(array1, array2)

// *******************************************************************************************
// program to sort array by property name [xxx]

// const students = [{name: 'Sara', age:24},{name: 'tara', age:24}, {name: 'zara', age:25}];

// function compareName(a, b) {

//     // converting to uppercase to have case-insensitive comparison
//     const name1 = a.name.toUpperCase();
//     const name2 = b.name.toUpperCase();

//     let comparison = 0;

//     if (name1 > name2) {
//         comparison = 1;
//     } else if (name1 < name2) {
//         comparison = -1;
//     }
//     return comparison;

// }

// console.log(students.(compareName));
// *******************************************************************************************
// // program to create a two dimensional array

// const x = 2;
// const y = 3;

// function twoDimensionArray(a, b) {
//     let arr = [];

//     // creating two dimensional array
//     for (let i = 0; i< a; i++) {
//         for(let j = 0; j< b; j++) {
//             arr[i] = [];
//         }
//     }

//     // inserting elements to array
//     for (let i = 0; i< a; i++) {
//         for(let j = 0; j< b; j++) {
//             arr[i][j] = j;
//         }
//     }
//     return arr;
// }

// const result = twoDimensionArray(x, y);
// console.log(result);
// *******************************************************************************************
// //  program to compare two arrays
// const array1 = [1, 3, 5, 8];
// const array2 = [1, 3, 5, 8]

// function compareArray(arr1, arr2){
// const result = JSON.stringify(arr1) === JSON.stringify(arr2);
// if(result){
//  document.write('both arrays are same')

// }
// else{
//     document.write('both arrays are not same')

// }

// }
// compareArray(array1, array2);
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************
// // program to get a random item from an array

// const array = ['red', 'blue', 'green' , 'orange', 'pink']

// function getRAndomColor(arr){

//     const randomNumber = Math.floor(Math.random() * arr.length);
//     const color = arr[randomNumber];

//     return color;
// }
// let result = getRAndomColor(array);
// document.write(result)

// *******************************************************************************************
// // program to perform intersection [finding common] between two arrays using filter method

// const array1 = [1, 2, 3, 5, 9];
// const array2 = [1, 3, 5, 8];

// function intersection(arr1, arr2){

//     const intersectResult = arr1.filter(x=> arr2.indexOf(x) !== -1);
//     return intersectResult;

// }

// const result = intersection(array1, array2);
// document.write(result);
// *******************************************************************************************
// // program to split array into smaller chunks
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10 , 11, 12];
// const chunk = 3;

// function splitIntoChunk(array, chunk) {

//     while(array.length > 0) {

//         let tempArray;
//         tempArray = array.splice(0, chunk);
//         console.log(tempArray);
//     }
// }

// splitIntoChunk(array, chunk);

//In the splice() method,
//The first argument specifies the index where you want to split an item.
//The second argument (here 2) specifies the number of items to split.
// *******************************************************************************************
// //program to set default parameter value

// function abc(x=3, y=5){
//  result= x + y;
//  console.log(result);
// }
// abc();
// abc(15,6);
// abc(20, 50);
// *******************************************************************************************
// // program to get the URL

// const url1 = window.location.href;
// const url2 = document.URL;

// document.write(url1);
// document.write(url2);
// *******************************************************************************************

// // // program to check if a variable is of function type

// const count = true;

// const x = function() {
//     console.log('hello');
// };
// // // +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+

// function testVariable(variable) {

//     if(variable instanceof Function) {
//         console.log('The variable is of function type');
//     }
//     else {
//         console.log('The variable is not of function type');
//     }
// }

// testVariable(count);
// testVariable(x);

// // In the above program, the instanceof operator is used to check the type of variable.

// *******************************************************************************************
// // // program to check if a variable is of function type using typeOf operator

// const count = true;

// const x = function() {
//     console.log('hello');
// };
// // // +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+

// function test(variable){
// if(typeof variable === 'function'){
// console.log("its a function")
// }
// else{
//     console.log("its not a function")

// }
// }
// test(count)
// test(x)

// *******************************************************************************************

// // program to pass parameter to a setTimeout() function

// function greet() {
//     console.log('Hello world');
// }

// // passing parameter
// setTimeout(greet, 3000);
// console.log('This message is shown first');
// *******************************************************************************************

// // program to pass parameter to function in setTimeout()
// function greet(x, y) {
//     console.log(x);
//     console.log(y);
// }

// setTimeout(greet, 5000, 'Ajinkya', 'Shinde');
// console.log('this is first line')
// *******************************************************************************************
// // program to check if a number is a float or integer value

// function checkNum(x){
// if (typeof x == 'number' && !isNaN(x)){
//   if(Number.isInteger(x)){
//       console.log(`${x} is integer`)
//   }
//   else{
//       console.log(`${x} is float`)
//   }

// }
// else{
//     console.log(`${x} is not a number`)
// }

// }

// checkNum("hiiiiii")
// checkNum(91)
// checkNum(3.5)
// checkNum(-3.5)
// checkNum(NaN)
// *******************************************************************************************
// // program to check if a number is a float or integer value usng regex

// function checkNumber(x) {

//     let regexPattern = /^-?[0-9]+$/;

//     // check if the passed number is integer or float
//     let result = regexPattern.test(x);

//     if(result) {
//         console.log(`${x} is an integer.`);
//     }
//     else {
//         console.log(`${x} is a float value.`)
//     }

// }

// checkNumber(44);
// checkNumber(-44);
// checkNumber(3.4);
// checkNumber(-3.4);
// *******************************************************************************************

// // program to pass a function as a parameter

// function greet() {
//     return 'Hello';
// }

// // passing function greet() as a parameter
// function name(user, func){

//     // accessing passed function
//     const message = func();

//     console.log(`${message} ${user}`);
// }

// name('John', greet);
// name('Jack', greet);
// name('Sara', greet);

// *******************************************************************************************
// *******************************************************************************************

// // program to get the dimensions of an image

// const img = new Image();

// // get the image
// img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png';

// // get height and width

// img.onload = function(){
//     document.write('width'+ this.width)
//     document.write('height'+ this.height)
// }
// // In the above program, new Image() constructor is used to create an image object.

// // The Image() constructor creates a new image element instance.

// // img.src is then used to add the image using an image URL source.

// // The img.onload() function is used to access the height and width of the image

// *******************************************************************************************
// const str = '    ajinkya         shinde       '
// console.log(str)
// const result = str.split('  ')
// console.log(result);
// const resultAftrjoin = result.join(' ')

// document.write(resultAftrjoin)

// *******************************************************************************************
// function removeExtraSpaces(x){

// const  result = x.replace(/\s/g, ' ');

// return result;
// }
// result= removeExtraSpaces('    ajinkya      shinde   ')
// document.write(result);

// *******************************************************************************************
// // program to convert date to number

// const d = new Date();

// document.write(d);

// const result = d.getTime();
// document.write(result)
