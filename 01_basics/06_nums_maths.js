const score = 400
// console.log(score); 

const balance = new Number(100)
// console.log(balance); // this assures that the input's datatype is number only 

// console.log(balance.toString()); // this converts the number datatype input to string datatype
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // gives the number's correct decimal places as asked in scopes (brackets)

// tofixed is useful in e-commerce websites where the precision value is larger in case of GST calc

const anotherNumber = 23.867
// console.log(anotherNumber.toPrecision(3)); // this will give round off of the given number as per the desired range in scopes, the counting process will start from LHS

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // this helps in counting number of zeros with help of commas this is usually represented in International number system by default "for representation in Indian number system use 'en-IN' after prototype (functions)"

// ****************************** MATHS ****************************** 
// Maths library is found by default in JS

// console.log(Math.abs(-4)); // this only converts -ve values to +ve

// console.log(Math.round(4.3)); // rounds off the number to the nearest integer

// console.log(Math.ceil(4.2)); // ceil means if number is even .1 greater it will round off to largest side i,e,. if we have 7.1 it will round it off to 8

// console.log(Math.floor(7.9)); // it is vice versa of ceil i,e,. it will round off the number to the smaller side no matter if its .8 or .9

// floor and ceil will be used very minimaly whereas round is the most frequently used function 

// console.log(Math.sqrt(25)); // helps to find square root of a number
// console.log(Math.pow(2 , 3)); // helps to find power of number x(2) to the power of y(3)
// console.log(Math.min(2, 5, 6, 8,)); // helps to find the minimum number among the array
// console.log(Math.max(2, 5, 6, 8,)); // helps to find the maximum number among the array

// console.log(Math.random()); // this will generate a random value between 0 and 1 every time
// console.log((Math.random()*10) + 1); // we will assurly get a random value greater than 0
// console.log(Math.floor(Math.random()*10) + 1); // floor helps in rounding off the big value to smaller interger

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min); // In this case according to variables declared (min and max) we used the formula where we generate a value between 0 and 1 with help of MATH RANDOM then we add the formula (max - min + 1) for assuring that the value will be grater than 0 ; then we add + min to get the value greater than 10 as per our (min =10) and less than or equal to 20 as per our (max = 20) & we added MIN (+ min) for the reason that we want the number to be atleast this minimum as of min = 10 

// so here firstly is the concept that the MATH.RANDOM gives us a random value between 0 and 1; secondly when we multiply the MATH.RANDOM with 10 i,e,. we are shifting the interger to LHS and adding +1 in it for the assurance of getting a value that is greater than 0; thirdly if we add MATH.FLOOR to the formula above we get the value that is rounded off to the smaller side of interger

const min1 = 100
const max1 = 200

console.log(Math.floor(Math.random() * (max1 - min1 + 1)) + min1);
