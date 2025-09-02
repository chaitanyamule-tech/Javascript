// 01.Basic

const addtwo = (num1,num2)=>{
    return num1 + num2
}
console.log(addtwo(20,5));

//Implicit arrow function

//const add = (num1,num2) =>  num1 + num2
//we can also write by following method 
const add = (num1,num2) => (num1 + num2)
console.log(add(20,5));

//return object in parenthesis 
// const add = (num1,num2) => ({username : "chaitanya"})
// console.log(add(20,5));