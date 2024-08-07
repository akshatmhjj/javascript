// Primitive

// Types : String, Number, Boolean, Null, Undefined, Symbol (used for making a value unique), BigInt (used for too large value)

const value = 100
const setValue = 100.3 // typeof number

const isLoggedIn = false // typeof boolean
const OutsideTemp = null // typeof object
let userEmail; // or it can be let userEmail = undefined 

const id = Symbol('123')
const anotherId = Symbol('123') // typeof symbol

console.log(id === anotherId); // false

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

console.log(typeof myFunction);
