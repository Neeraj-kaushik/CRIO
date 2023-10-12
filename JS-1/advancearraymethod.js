//splice:- used to change the contents of an array by removing or replacing existing element and adding new ones
let val=[1,2,3,4,5,6]
//splice(index, number of element to remove , elements to add)
//removing element
val.splice(2,2)
console.log(val)

// replacing element
val.splice(2,0,8,9)
console.log(val)

//adding and removing element
val.splice(2,1,10,12)
console.log(val)

//slice:- it will extract elements from array based on the index and return a new array
console.log(val.slice(1,4))
console.log(val.slice(3))