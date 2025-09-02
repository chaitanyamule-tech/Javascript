const myarray = [1,3,5,7,9,10,20,4,6]
// console.log(myarray);
// console.log(myarray[3]);
// console.log(myarray.at(2));
// myarray.unshift(0) //add element at 1st position of array
// myarray.push(10)
//myarray.filter

// console.log(myarray.includes(11)) //return false
// console.log(myarray.includes(9)); //return true
// console.log(myarray.indexOf(6));
// console.log(myarray.indexOf(9));
// console.log(myarray.includes(11)); //return -1 if value is not present in array
// console.log(myarray.filter(myarray => myarray % 2 === 0));
// const newarray = myarray.join()
// console.log(typeof newarray)

//console.log(myarray.join()); //it changes array to string
// myarray.pop() // no need to pass argument it removes last element automatically
// console.log(myarray)

//another method to declare array

// const myarray2 = new Array(10,20,30,40,50,60)
// console.log(myarray2);

console.log("A ", myarray);
const myn1 = myarray.slice(0,4) //it doesn't

console.log(myn1);
console.log("B ", myarray);
const myn2 = myarray.splice(0,6) //it includes last value and remove the elements permenently (check array C)
console.log("C ", myarray);
console.log(myn2)

