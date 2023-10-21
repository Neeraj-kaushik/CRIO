const para=document.getElementById("p1");
const btn=document.getElementById("btn1");
const btn3=document.getElementById("btn2");
let iny=para.textContent

btn.addEventListener('click',()=>{
    iny=Number(iny)+1
    para.textContent=iny
})
btn3.addEventListener('click',()=>{
    iny=Number(iny)-1
    para.textContent=iny
})