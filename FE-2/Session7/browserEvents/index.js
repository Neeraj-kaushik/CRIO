const para=document.getElementById("p1");
const btn=document.getElementById("btn1");
const btn3=document.getElementById("btn2");
let iny=para.textContent

// btn.addEventListener('click',()=>{
//     iny=Number(iny)+1
//     para.textContent=iny
// })
// btn3.addEventListener('click',()=>{
//     iny=Number(iny)-1
//     para.textContent=iny
// })

//using one function as event handler using event object
function counter(val){
    if(val==='btn1'){
        iny=Number(iny)+1
        para.textContent=iny
    }else if(val==='btn2'){
        iny=Number(iny)-1
        para.textContent=iny
    }
}
document.addEventListener('click',(event)=>{
    counter(event.target.id)
})
