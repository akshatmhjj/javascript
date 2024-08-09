// Dates

let myDate = new Date()
// console.log(myDate.toString()); // Date is a object kyunki uska instance create krte hai

// console.log(myDate.toDateString()); // retrieves date

// console.log(myDate.toTimeString());  // retrieves time with GMT

// console.log(myDate.toISOString()); 

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString()); // gives date in form of M/D/Y

// console.log(myDate.toLocaleString()); // retrieves local system date and time

// console.log(myDate.toLocaleTimeString()); // retrieves time

let myCreatedDate = new Date(2023, 0, 23)

// console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3) // first three elements denotes date and 4th and 5th specifies the time

// console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2024-04-13") // this gives us a desired date of our own choice in YYYY-MM-DD format
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate2.getTime()); // converts date to miliseconds

// console.log(Math.floor(Date.now()/1000)); // we will get decimal values thats why we put math.floor for accurate value thats rounded off 

let newDate = new Date()
// console.log(newDate);
// onsole.log(newDate.getDate());
// console.log(newDate.getMonth()); // we will get the number of month on basis on month counting starting from 0-11 ; we can use getmonth() + 1 for accurate counting of months i,e,. 1-12

// console.log(newDate.getDay());

// console.log(`Today's date is ${newDate.getDate()} of the month ${newDate.getMonth()}`); // using string interpolation we can generate sentences with the use of retreving variables value

newDate.toLocaleDateString('default', {
    weekday: "long"
    
})
console.log(newDate);
