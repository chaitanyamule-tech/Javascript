const num1 = [1,2,3,4,5,6,7,8,9]
const num2 = [10,20,30,40,50,60,70,80,90]

// num1.push(num2)
// console.log(num1);

 num = num1.concat(num2)
console.log("new array by combining num1 & num2",num);
console.log(`getting new array by combining ${num1} and ${num2} is`, num)

//spread

const all_nums = [...num1, ...num2]
console.log(all_nums);


const combine_arr = [11,12,13,14,[15,16,17],18,19,20]
const another_combine_arr = combine_arr.flat(Infinity)
console.log(another_combine_arr);

//convert into array 
console.log(Array.isArray("Chaitanya"))
console.log(Array.from("Chaitanya"))

//convert individual data in array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
