// Function Expression: it refers to defining a function as an expression by assigning it to a variable
let val=function bye(){
    console.log("Bye!!")
}
val()


//Arrow Function:- consice syntax of defining function that preserve the lexical scope of the surrounding context. we use this method when we want to preserve the value of 'this from the surrounding content
let val1=()=>console.log("Hello")
val1()