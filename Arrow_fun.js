// function chai (){
//     let username = "chaitanya";
//     console.log(this.username);// this keyword is not used in function  it can be used in object
// }
// chai()

// const chai = function (){
//     let name = "chaitanya";
//     console.log(this.name);
// }
// chai()


//Arrow Function 

const chai = () => {
    let name = "chaitanya";
   // console.log(this);
   console.log(this.name);
}
chai()