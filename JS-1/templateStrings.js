// template strings : this was introduceed with ES6 version. using this we can easily use variables inside a string as well.
// other than template string i will use some method like uppercase and lowerccase property

// let a="Neeraj"
// let b=a.toUpperCase()
// console.log(b)
// b=a.toLowerCase()
// console.log(b)
// let val=56;
// console.log(`Age of Lakan is ${val}`)

//String methods
// indexOf():- this will give the first index of the character in the String
// lastIndexOf():- this will give the last occurence of the character in the String
let str = "Hello, world! Welcome to JavaScript!";
console.log(str.indexOf('e'));
console.log(str.lastIndexOf('e'));

//substring(): pop out the particular part of string form the main string
console.log(str.substring(2,5));

//concat:- this method is used to add two String;
let str1="Bye!!";
let conStr=str.concat(str1)
console.log(conStr)

