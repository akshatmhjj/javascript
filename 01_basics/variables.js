const accountId = 113756
let accountEmail = "akshat@gmail.com"
var accountPassword = "12345"
accountCity = "indore"
let accountState
// accountId = 2 // not allowed

accountEmail = "ak@mhjj.com"
accountPassword = "67890"
accountCity = "Ujjain"

console.log(accountId);

/*
prefer not to use var
coz of issue in block scope and fucntional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])