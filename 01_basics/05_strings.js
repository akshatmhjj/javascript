const name = "Akshat"
const repoCount = 10

// console.log(name + repoCount + " Value"); SHOULD AVOID THIS SYNTAX

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // This is the String Interpolation [`this is back ticks`] with which we create placeholders for variables and its values

const gameName = new String ('akshat-mhjj') // Another way for declaring string & this uses objects of JS

// console.log(gameName[1]); // This method makes key value pairs for each letter of the word with its individual positions, for ex: if we put gameName[0] then it will show the letter 'a' from string 'akshatmhjj' i,e,. the position of letter 'a' is '0' in the string and 'k' holds '1' position

// console.log(gameName.__proto__); // we will get a empty object through the __proto__

// console.log(gameName.length); // gives the lenght of the string

// console.log(gameName.toUpperCase()); // this won't change the original value as string is saved in stack memory

// console.log(gameName.charAt("6")); // helps to find the character at a particular index

// console.log(gameName.indexOf('t')); // helps to find the index of a particular character

const anotherId = gameName.substring(0, 4)
// console.log(anotherId);// this give specific character according to the numbering of start and end position, it can't have -ve positioning values

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString); // slice starts retreiving the characters from backwards, it can have -ve positioning values

const anotherIdOne = "    akshat    "
// console.log(anotherIdOne);
// console.log(anotherIdOne.trim()); // this will trim out the unneccesary spaces

const url = "http://akshat.com/akshat%20mahajan"

// console.log(url.replace('%20' , '-')) // this will replace the elements upon our choice 

// console.log(url.includes('akshat')) // checks whether a value exixts in variable or not

// console.log(gameName.split('-')); // splits a string into array with seperators (the element or spaces on basis of which you need to seperate the string)

const url1 = "akshat"
const url2 = "mhjj"

// console.log(url1.concat(' ', url2));

// console.log(url1.endsWith('t'));

// console.log(url1.padEnd(20 ,'.'));


