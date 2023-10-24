//I will try to create a promise
const val=new Promise((res,rej)=>{
    try{
        let a=70;
        if(a===70){
            return res("Resolved")
        }else{
            return rej("Not resolved")
        }
    }catch{
        return rej(new Error("Rejected"))
    }
})
val.then((rea)=>{
    console.log(rea)
}).catch((err)=>{
    console.log(err)
})