const res = fetch("https://api.kanye.rest/")
//console.log(res) // this will give us a promise
// to consume its value we need to use .then() and .catch()
// let x=res.then((val)=>{
//     let j=val.json();
//     return j
// }).then((val1)=>{
//     // console.log(val1.quote)
//     return val1.quote
// }).catch((err)=>{
//     throw new Error(err)
// })
// console.log(x)


////////Activity Quote Kanye!//////
// function fetchQuote(){
//     let x=fetch("https://api.kanye.rest/").then((val)=>{
//         return val.json()
//     }).catch((err)=>{
//         throw new Error(err)
//     })
//     return x
// }
// function addQuoteToDOM(q){
//     let val=document.getElementsByTagName("p")[0];
//     let b=document.createElement("div")
//     q.then((ans)=>{
//         let c=ans.quote
//         b.innerHTML=`<h1>${c}</h1>`
//         val.appendChild(b)
//     }).catch((err)=>{
//         throw new Error(err)
//     })
    

// }
// function quoteKanye(){
//     let quote=fetchQuote()
//     addQuoteToDOM(quote)
// }
// quoteKanye()

// /////CODE DEMO-FETCH DATA///////////
// function fetching(){
//     let x=fetch("https://api.github.com/users")
//     .then((val)=>{
//         return val.json()
//     })
//     // .then((val1)=>{
//     //     for(let i =0; i<val1.length;i++){
//     //         console.log(val1[i].login)
//     //     }
//     // })
//     .catch((err)=>{
//         throw new Error(err)
//     })
//     return x;
// }
// // fetching()

// ///////Activity Create list itmes dynamically and display///////////////////
// function createListItem(text){
//     let val=fetching()
//     let l=document.getElementById("list")
//     val.then((ele)=>{
//         for(let i =0; i<ele.length;i++){
//             let item=document.createElement("li")
//             item.innerHTML=`${ele[i].login}`
//             l.append(item)
//         }
//     })

// }
// createListItem()

async function getUsers(){
    let x= await fetch("https://api.github.com/users")
    return x.json()
}
function countUsers(){
    let ans=getUsers()
    ans.then((val)=>{
        for(let i =0; i<val.length;i++){
            console.log(val[i].login)
            }
    })
}
countUsers()