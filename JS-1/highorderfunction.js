//map():- it is very similiar to foreach method but it returns a new array by applying all the functions on all the elements.it is used when we want to manipulate all elements in our array
let arr=[1,2,3,4,5]
let newarr=arr.map((val,i,a)=>{
    return val*2;
})
console.log(newarr)

//filter- it is used to find all the elements from the array which satisfy the condition 
let fil=arr.filter((a,i,f)=>{
    return a>3;
})
console.log(fil)

//reduce:-it is used to apply function to elements of the array so that we can reduce it to single value
let b=arr.reduce((a,val)=>{
    return a*val
},1)
console.log(b)