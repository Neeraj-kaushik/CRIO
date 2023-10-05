// //hoisting:- this is the behaviour in js where all the variable or function declaration moved at the top of there scope during compilation phase , allowing them to be used even before they are being used. variable must be declared using var
console.log(val)
var val='10'

val1()
function val1(){
    console.log('Bye')
}

val3()
var val3=()=>{
    console.log('Hello')
}