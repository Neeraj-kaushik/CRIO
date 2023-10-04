//global scope:- it is the outermost scope variable defined inside this scope can easily asseccible throughout the program as well as to external programs as well.
//global variable example
let val=1;
//global function example
function val1(){
    console.log("byee!!")
    console.log(val)
}
val1()

//local scope:- refers to scope withing the block, function where all the varibales and functions are accessible inside that scope only
function bye(){
    let a=10;
    console.log(a)
}
bye()
// console.log(a) this will give us error because a is binded inside the function bye


// Lexical scope : it refers to the accessiblity and availabiltiy of a variable , function based on the scope they are definced