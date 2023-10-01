//array:- it is non-primitve data type which can store multiple values of different datatype under one name.
let a=[1,2,3,4,5,"Neeraj","value",24.5]
console.log(a[3]);
//methods on array
// Push(): we can add elements to Array
a.push("Neha");
a.push(1,2,3);
console.log(a);

//pop: it will delete elements from the end
a.pop();
console.log(a);
let b=a.pop();
console.log(a);

//unshift:- it will add elements from the front of the array.
a.unshift(45,46,47);
console.log(a)

//shift: used to delete elements from the front of array
a.shift()
console.log(a)

//reverse:- this will reverse the array
a.reverse()
console.log(a)

//includes:- used to search weather the element is inside the array or not
console.log(a.includes("Neeraj"));
console.log(a.includes(98))

//join:- used to convert array to string
let c=[1,2,3,4,5,6]
console.log(c.join(''));

//split():- used to convert string to array
let str1="Neeraj"
b=str1.split('')
console.log(b)
