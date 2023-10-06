/////////////////var////////////////
//1. global
var a=10;
// this is accessible through all over the progrma and can be reassigned and redeclared anywhere
function val(){
    var a=20;
}
console.log(a) //10
val()
var a=40
console.log(a) //10

//2. function 
function call(){
    var b=10;
    console.log(b)//10
}
call()
//console.log(b); // this will give error as it is function scoped

//3 block
var c=30;
if (c===30){
    var d=40;
    console.log(d)
}
console.log(d) // the value of d is accessible outside thats why we try to use let or const here

////////////const//////////////////
//global
const g=30;
//const g=10; we can't declare const varibale again
function gg(){
    const g=10; // we are able to redefine it in function as this g is scoped in this function only
    console.log(g)
}
gg() // do not affect outer g value
console.log(g)

// function
function ff(){
    const j=10;
    console.log(j)
}
ff()
//console.log(j) // this will give error because j is defined using const and so it is block scoped we cant call it outside the block

// block
const o=50
if (o===50){
    const jj=555;
    console.log("run")
}
//console.log(jj) //this will give error to us thats why we are supposed to use let and const because they are blocked scoped and this cant be possible if the variable defined using the var 


/////////////////let////////////////
// global
let t=333
t=33333 // this is possible
// let t=384302 // this will give us error

//function
function llll(){
    let tt=3343
    console.log(tt)
}
llll()
//console.log(tt) // this will give us error

// block

let ttt=10
if(ttt===10){
    let tttt=343432
    console.log(tttt)
}
//console.log(tttt) // this will give error 
