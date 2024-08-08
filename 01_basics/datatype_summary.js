// Primitive

// Types : String, Number, Boolean, Null, Undefined, Symbol (used for making a value unique), BigInt (used for too large value)

const value = 100
const setValue = 100.3 // typeof number

const isLoggedIn = false // typeof boolean
const OutsideTemp = null // typeof object
let userEmail; // or it can be let userEmail = undefined 

const id = Symbol('123')
const anotherId = Symbol('123') // typeof symbol

// console.log(id === anotherId); // false

// Non-Primitive (Reference)

// Array, Objects, Function

const Array = ["Sallu", "Shahrukh", "Aamir"] // Array, typeof object

let myObj = {
    name: "Akshat",
    age: 20,
    city: "indore"

} // Objects, here any datatype may be used in values, typeof object

const myFunction = function(){
    console.log("Hello World");
    
} // typeof function, also reffered as object function

// console.log(typeof myFunction);

// *********************************************** MEMORY ***********************************************

// There are two types of memory i,e,. Stack(used in primitive datatype) and Heap(used in non-primitive datatype) Memory

// Stack memory is the memory where we get a copy of the declared variable

// Heap memory is the memory where we get the actual reference of the stored variable i,e,. if we do changes in the var it will be done in the original var; and not in the duplicate var as in stack memory

let myname = "akshat"

let anothername = myname
anothername = "mahajan"

// console.log(anothername); // here the output will be the reference input i.e., akshat or the changed value i,e,. mahajan
// console.log(myname); // here the output will be the value assigned to the variable

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne // here the userTwo will get the original references from the values of userOne var, if userTwo modifies the values it will be modified the same in userOne, unlike where in stack the values or reference given to "anothername" was a seperate copy of the original "myname" data that is changes in "anothername" doesn't change the values of "myname"

userTwo.email = "user@ibm"
userTwo.upi = "user@icici"

console.log(userTwo.email);
console.log(userOne.email);

