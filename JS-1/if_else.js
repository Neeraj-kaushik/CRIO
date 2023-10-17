// if else: this is conditional statement like when one do not gets completed than it will automatically run the second statements based on the conditions defiend
//eg
let a=18;
if(a<18){
    console.log("cannot drive")
}else{
    console.log("can drive")
}

// if else chaining
// eg comparision between 3 variables
let val=1, val2=2,val3=3;
let max1=null;
if(val>val2){
    if (val>val3){
        max1=val
    }else{
        max1=val3;
    }
}else{
    if(val2>val3){
        max1=val2
    }else{
        max1=val3
    }
}
console.log(max1)