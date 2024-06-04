// console.log("Namaste Javascript");
// Console.log is used to log(print) a message to the console.

// name = "Tony stark";
// age = 24;
// price = 99.99;
// console.log(name);
// console.log(age);
// console.log(price);

// fullname = "Akshith"
// FullName = "Ramdeni"
// FULLNAME =  'JAVASCRIPT'
// console.log(fullname)
// console.log(FullName)
// console.log(FULLNAME)

// Let,Const & Var

// Var: Variable can be Re-decleared & updated. A global scope Variable

// Let: Variable cannot be re-decleared but can be updated. A block scope variable.

// Const: Variable cannot be re-declared or updated. A block scope variable.


// let name = 'tony stark'
// let age = 20;
// let totalPrice = 1000;

// console.log(name);
// console.log(age);
// console.log(totalPrice);

// Datatypes in JS
// Number, String,Boolean,Undefined,Null,BigInt,Symbol.
/*

Operators in js 
Used to perform some operation on the data. 
Arithmetric Operators 
+,-,*,/
Modulus
Exponention
                                                                                                                                
*/

// let a = 5;
// let b = 2;

// console.log(a,b);

// console.log("a+b = ", a+b);
// console.log("a-b = ", a-b);
// console.log("a*b = ", a*b);
// console.log("a/b = ", a/b);
// console.log("a%b = ", a%b);
//  console.log("a**b = ", a**b);

// // Asignment Operator:
// let a =5;
// a **= 4; //  a = a ** 4
// console.log("a = ", a); // 1 

// Comparison Operator

// Equal to == 
// not Equal to !=

// >,>=,<,<=

// let a = 5;
// let b = 2;
// console.log("5 == 2",a==b); // false

// Logical Operators

// And && 
// OR || 
// NOT !

// Logical 
// let a = 6;
// let b = 2;
// let cond1 = a>b; // true
// // let cond2 = a==6 // true
// let cond2 = b>a; // false
// console.log(cond1 && cond2);
// console.log(cond1 && cond2);

// Conditional Statements
// To implement some condition in the code 
// if Statement 

// let age = 25;
// if(age> 18){
//     console.log('you can Vote')
// }else{
//     console.log('You cant vote')
// }

// let mode = 'dark';
// let color;
// if(mode === 'dark'){
//     color='black'
// // }if(mode === 'light'){
// //     color='white';
// // }
// }else{
//     color='white';
// }
// console.log(color)

// Even or odd 

// let num = 9;
// if(num%2===0){
//     console.log(num,"is Even")
// }else{
//     console.log(num,"is odd")
// }
// else if statement 


// let age =25;
// if(age<18){
//     console.log("Junior")
// }else if(age>60){
// console.log("Senior")
// }
// else{
//     console.log('middle')
// }

// Ternary Operator
// Condtion ? trueoutput:false output

// age >18 ? 'adult' : 'not adult';

// let age =25;
//   let result = age > 18 ? 'Adult' : 'not an Adult';
//   console.log(result)

// switch case 

// alert('Hello')



// Get user to input a number using prompt("Enter a number:") check if the number is a multiple of 5 or not;

// let user = prompt("Enter your Number: ");

// if(user % 5 ===0){
//     console.log("Number is multiple of 5")
// }else{
//     console.log("NUmber is not multiple of 5")
// }


// write a code which can give grades to students according to their scores:
// 90-100 A 
// 70-89 B 
// 60 - 69 C 
// 50 -59 D
// 0- 49 F 

// let score = prompt("Enter your Score(0-100):")
// let grade;
// if(score >=90 && score<= 100){
//     grade = "YOUR PASSED WITH : A GRADE";
// }else if(score >=70 && score <=89){
//     grade = "YOUR PASSED WITH : B GRADE";
// }else if(score >=60 && score<=69){
//     grade = "YOUR PASSED WITH : C GRADE";
// }else if(score >=50 && score <=59){
//     grade = "YOUR PASSED WITH : D GRADE";
// }else if(score >=0 && score <=49){
//     grafe = "FAIL"
// }

// console.log("According to your scores", grade);

// loops 
// loops are used to execute a piece of code again & again 

// for loop 
// we need to print a word for 5 times 

// console.log("NAMASTE JAVASCRIPT");
// console.log("NAMASTE JAVASCRIPT");
// console.log("NAMASTE JAVASCRIPT");
// console.log("NAMASTE JAVASCRIPT");
// console.log("NAMASTE JAVASCRIPT");

// for(intitilze;stopping conditon;updation){
//     console.log('JAI SRI RAM');
// }

// for(let count = 1; count <5; count++){
//     console.log("JAI SHREE KRISHNA")
// }
// console.log("Loop Ended")


// calculate sum of 1 to 5

// let sum = 0;
// for(let i =0;i<=5;i++){
//     sum = sum + i;
// }
// console.log("SUM",sum )
// console.log("Loop has Ended");

// print 1 to 5;
// for(let count = 1;count<=5;count++){
//     console.log("Count",count)
// }

// infinte loop: A loop that never end (we should not do that)
   
// while loop
// let i =1;
// while(i<=10){
//     console.log("NAMASTE")
//     i++;
// }

// do while loop

// do{
//     // some work
// }
// while(conditon);

// let i = 20;
// do{
//     console.log("Apna college");
//     i++;
// }while(i<=10);


//  let i =1;
// do{
//     console.log('i=',i);
//     i++
// }while(i<=5);


// for of loop.
// for(variable of variable){
//     // do some work
// }

// For of Loop 

// let name = 'Namaste People';
// for(let i of name){
//     console.log("i",i)
// }

// prime all prime Number 1 to 100

// for(let prime =0;prime<=100;prime++){
//     if(prime%2 !==0)
//         {
//             console.log(prime);
//         }
// }

// let gamenum = 56;
// let usernum = prompt("Guess the game number: ");
// while(usernum != gamenum){
//     usernum = prompt("You enterned wrong number , GUess Agian: ")
// }
// console.log("Congrats")

// String in js

// String in a sequence of character used to represent Text
// Create String
// let str = "Akshit"

// str length
// str.length

// Template literals in js 
// A way to have embedded expression in the String 
// `This is a template Literal`

// String interpolation 
// To create string by doing substitution of placeholders
// `string text ${expersion} string text`

// let sentence = `this is a Template Literal`; // Special String
// console.log(sentence)

// let output = `the cost of ${'hello'}`
// console.log(output)

// String Methods in js 
// These are Built- in functions to manipulate a String

// str.toUpperCase()
// str.toLowerCase()
// str.trim // removes the whitespaces

// let str = 'apna'
// // str.toUpperCase;
// console.log(str.toUpperCase())

// let str = "                Apna collge js "
// console.log(str)
// console.log(str.trim())

// str.slice(start,end) // return part of string

// str1.concat(str2) // join str2 

// let str ="HELLO"
// console.log(str.slice(1,3))

// if we want to join the string1 with string2 then we use the concat method concat()

// let str1 = 'Akshith';
// let str2 = 'Sai Raj'
// let result =str1.concat(str2)
// console.log(result)

// Replacing the value in the string
// let str = "hEllo" 
// console.log(str.replace("h","y"));

// let str ='ILOVEJS';
// console.log(str.charAt(2)); // o searching char in the index


// Arrays
// it is collection of items

// let marks = [96,56,98,65,54]
// 
// let student_marks = [97,84,75,65,20,12,98,99];

// let info = ['rahul',86,'delhi'] 

// // object 
// let marks ={
    //     stud1:17,
    //     stud2:18
    // }
    
    // information storre in linear
    
    // positon and index 
    
    // how to create an array 
    // let heroes =['iron man','hulk','thor','batman'];
    // there is be no key values in the array 

    // let marks = [85,96,45,62,25]
    // console.log(marks)
    // console.log(marks.length) // Property.  
    // // array is an object type
    // console.log(typeof marks)

    // instead of key in the ARRAY we having index 

    // array indices 
    // we use to access the array we use arr[]

    // let marks = [97,82,64,76,36]
    // linear fashion it is stored mean single or straight line 

    // console.log(marks[4])

    // marks[2] = 0;
    // console.log(marks)

    // strings are immutable 
    // array is mutable

    // looping over an array 

    // print all element from the array 

    // let heroes = ['Spiderman','Batman','Hero','Hulk',"Antman","Ninjaman"]
//  for(let inx=0;inx<heroes.length;inx++){
//     console.log(heroes[inx]);
//  }
 
// for of loop
// for(let hero of heroes){
//     console.log(hero)
// }

// let cities = ['delhi','pune','mumbai','hyderabad']
// for(let city of cities){
//     console.log(city.toUpperCase())
// }

// Question

// For a given array with marks of students -> [85,97,44,37,76,60] 
// find the average marks of the entire class.

// let marks = [85,97,44,37,76,60]

// let sum = 0;

// for(let val of marks){
//     sum+= val;
// }
// let avg = sum/marks.length
// console.log(sum)


// For a given array with prices of 5 items -> [250,645,300,900,50]
// All the items have an offer to 10% OFF on them. change the array to store final price after applying offer.

// let items = [250,645,300,900,50];

// let i = 0;
// for(let val of items){
//   console.log(`value of at index${i} = ${val}`)
//   let offer = val/10;
//   items[i] = items[i] - offer;
//   console.log(`value after offer = ${items[i]}`);
//   i++;
// }

// Array methods

// Push() - add to end 
// Pop() - Delete from end & return

// toString() - convert array to string 

let fruits = ['Apple','Potato','Tomato','Chips','Chilli']
// fruits.push('is')
// console.log(fruits)
// console.log(fruits.length)
// console.log(fruits)
// let deleteditem = fruits.pop();
// console.log(deleteditem)

// toString()
// to convert a array into string 

// console.log(fruits)
// console.log(fruits.toString())

// Array  concat() - Joins multiple arrays & return result 

// unshift() : add to StaticRange
// shift() - delete from start & return

// Array  concat() - Joins multiple arrays & return result 

// let heros = ['thor','spiderman','ironman']
// let heroses = ['superman','batman']

// let superhero = heros.concat(heroes);

// console.log(superhero);

// slice() - return a piece of the  Array
//  Slice(startindex,endindex)

//  splice() : Change orginal Array(add,remove,replace)
//  splice(startindex,delcount,newelement)

//  let heros = ['thor','spiderman','ironman'];
// slice 
//  console.log(heroes.slice(1,3))

// Splice

// let arr = [1,2,3,4,5,6,7,8,9,10]

// arr.splice(2,2,101,120)
// console.log(arr)

//Element add

// arr.splice(2,0,1001)
// console.log(arr)

// delete element 
// arr.splice(3,1);
// console.log(arr)

// Replace the array 

// arr.splice(3,1,100)



 // question 
//  create an array to store companies -> "Bloomberg", "Microsoft","uber","Google","IBM","Netflix"
// remove the first company from the array

// remove the uber & add Ola its place
// add amazon at the end

// let companies = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
// companies.]shift()
// console.log(companies)
// companies.splice(1,2,"OLA");
// console.log(companies)
// companies.push("Amazon")
// console.log(companies)

// Functions

// Block of code that perfoms a specific task can be invoked whenever needed.


// function functionName(){
//     // do some work
// }

// then we will call the function
// functionName()

// function myName(){
//     console.log("Welcome to javascript")
// }

// myName();

// function myFunction(msg){
//     // parent --> input
//     console.log(msg);
// }

// myFunction("I love javascript") // argument

// function ->  2numbers,sum

// function sum(x,y){
//     // console.log(x+y)
//     s = x+y;
//     return s;
// }


// let value =  sum(4,3)
// console.log(value)

// arrow function
// compact   wat of writing a function 

// sum function  

// const sum = (a,b) =>{
//     return a+b;
// }

// const value =sum(2,7)

// console.log(value)

// function countVowel(str){
//     // Apna college, count =5;
// let count =0;
// for(const char of str){
//     if(char ==='a' || char ==='e'|| char ==='i' || char==='o' || char ==='u'){
//            count++;
        
// }

// }
// console.log(count)
// }



// const vowelcount = (str) =>{
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" ||char === "o" ||char === "u" ){

//             count++;
//          }
//     }
//     return count++;
// }


// let arr = [1,2,3,4,5,6]

// arr.forEach(function values(value){
//     console.log(value);
// }
// )



// let nums = [2,3,4,5,6]

// nums.forEach((num)=>{
//     console.log(num * num)
// })


// map 
// create  a new array with the results of some operation. the value its callback returns are used to form new array 

// let nums = [67,52,39];
// nums.map((val)=>{
//     console.log(val)
// })


// filter   

// Create a new array of elements that give true for a conditon/fiter 


// let arr = [1,2,3,4,5,6,7,8,9,10,12,14,16,11,134,]
// let evenarr = arr.filter((val)=>{
//     return val%2 ===0
// })

// console.log(evenarr)


// DOM PART -1;