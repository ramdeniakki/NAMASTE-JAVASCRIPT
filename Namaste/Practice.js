// const product = {
//     title:'Ball pen',
//     rating: 4,
//     offer:5,
//     price: 270,
// }
// console.log(product)

// const profile = {
//     username: '@akshith',
//     isfollow: false,
//     followers:123,
//     following: 123,
// };
// console.log(profile)
// console.log(typeof profile["username"])

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