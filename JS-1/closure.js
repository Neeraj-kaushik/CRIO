//closure:- it is the combination of a function and the lexical environment within which it is declared. it allow us to access the variable from its outer function evern it execution is done. it is used for creating private variable, encapsulate data etc.
//eg
function outer(){
    let a="I am outer";
    function inner(){
        let b="I am inner";
        console.log(b);
        console.log(a);
    }
    return inner
}
let val=outer()
val()

