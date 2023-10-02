//objects: it is a nonprimitve data type which is used to store data in format of key value pair.
let val={
    val1:"Neeraj",
    val2:"Neha",
    val3:4,
    val4:7
}
console.log(val.val1)
console.log(val["val3"])


//Nested Object
let val1={
    val2:{
        add:'Dubaldhan',
        tel:464646
    },
    val3:{
        add:'Vara',
        tel:47463
    }
}
console.log(val1.val2.add);
console.log(val1["val3"]["add"])


//Array.isArray(): when we check type of array and object they both are object so to check wheather the given value is an array or an object we use this method
let arr=[1,2,3,4]
console.log(typeof(arr))
console.log(typeof(val1))
console.log(Array.isArray(arr))
console.log(Array.isArray(val1))

//destructuring using this feature we can extract the values from an array or object and assign them to variable
let [x,y,z,g]=arr;
console.log(x,y,z,g)
//object destructuring
let {val2,val3}=val1
console.log(val2)