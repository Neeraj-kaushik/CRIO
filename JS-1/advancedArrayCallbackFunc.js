//forEach:- this will iterate over every element of the array and return us output
let arr=[1,2,3,4,5]
arr.forEach((val,i,j)=>{
    console.log(`element:${val} and index:${i}  and array:${j}`)
});

//find():- it is used to search very first element in array which meet the specification
let f=arr.find((val,i)=>{
    return (val>2);
});
console.log(f)