//IIFE : Immediately Invoked Function Expression 
//iife is used to remove the pollution of global scope
(function name (){
    console.log(`DB connected`)
})(); //semicolon is necessary

//arrow function
//Named iife 
(() => {
    console.log(`DB connect automatically`)
})();

//passing 
//simple iife
((name) => {
    console.log(`DB connect automatically ${name}`)
})("chaitanya")