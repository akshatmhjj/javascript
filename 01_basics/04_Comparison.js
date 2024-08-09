// console.log(2 > 1);
// console.log(2 == 1);
// console.log(2 <= 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("1" < 2);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); // reason for it to show true is that the == operation works differently as comparison to >,<,>=,<=. The comparison converts null to a number i.e., 0 thats why null >= 0 is true and null > 0 is false

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined < 0); // this will be false always

// conversions & comparison of null and undefined datatype are not recommended and should be avoided

// === triple equal to is "strict check" this not only check the values but also check there datatype whether they are same or not

console.log("2" === 2);
