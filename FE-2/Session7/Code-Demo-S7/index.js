const data={
    fullName:null,
    email:null
}
let value1=null;
let value2=null;
const user=document.getElementById("user")
user.addEventListener('input',(e)=>{
    value1=e.target.value
    data["fullName"]=value1
})

const email1=document.getElementById("email")
email1.addEventListener('input',(e)=>{
    value2=e.target.value
    data["email"]=value2
})

const btn1=document.getElementById("btn1")
btn1.addEventListener('click',()=>{
    const para=document.getElementsByTagName("body")[0];
    const child1=document.createElement("p")
    child1.textContent=`Your username is ${data["fullName"]} and Email id is ${data["email"]}`
    para.append(child1)
})
