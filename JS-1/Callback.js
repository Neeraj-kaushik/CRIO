//callback:- it is a function that is passed as an argument to another function so that it can be executed later. they are mostly used for handling asynchronous operation.
let add=(a,b)=>{
    return a+b;
}
let multiply=(a,b)=>{
    return a*b
}

let func=(val1,val2,oper)=>{
    console.log(`The sum of ${val1} and ${val2} is ${oper(val1,val2)}`)
    console.log(`The multiplication of ${val1} and ${val2} is ${oper(val1,val2)}`)
}

func(2,3,add);
func(4,5,multiply)