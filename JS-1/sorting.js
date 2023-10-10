//sort():- in js it sort the values lexicographical manner
//eg
let arr=[1,2,11,22,3,33,4] // after sorting arrrayshould be [1,2,3,4,11,22,33]
arr.sort()
console.log(arr) //[1,11,2,22,3,33,4]

// to sort our array in numerical manner we need to pass a compare function 
arr.sort((a,b)=>{
    return a-b;
})
console.log(arr)
//for descending order
arr.sort((a,b)=>{
    return b-a;
})
console.log(arr)