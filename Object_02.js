//object singleton or with the help of constructor

const user = new Object()   //it is singleton object
console.log(user);  

const accuser = {} // non singleton object
accuser.ID = "123abc"
accuser.name = "sammy"
accuser.isloggedin = false
console.log(accuser)

//object inside object

const obj1 = {A : "1",B:"2" ,C:"3"}
const obj2 = {name :"chetan",ID :"123abc"}
//const obj3 = {obj1,obj2}

const obj4 = Object.assign(obj1 , obj2)
console.log(obj4)
const obj5 = Object.assign({},obj1 , obj2)
console.log(obj5);
//console.log("obj1 + obj2 :-",obj3);


//we can add objects in array
//keep in mind comma (,) is necessary after every obj or values in objects

const users = [
      {
        ID :"a1",
        Email : "a1@gmail.com"
     },
     {
        ID :"a2",
        Email : "a2@gmail.com"
     },
     {
        ID :"a3",
        Email : "a3@gmail.com"
     },
     {
        ID :"a4",
        Email : "a4@gmail.com"
     }

]

console.log(users)
console.log(Object.keys(users)) // its data type is array when it gives output
console.log(Object.values(users))
console.log(Object.entries(users))//it converts each key value pair in array
