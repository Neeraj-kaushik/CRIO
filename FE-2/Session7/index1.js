// const promiseGreeting = new Promise((resolve, reject) => {
//     try {
//       const greeting = "Hello Rohan !";
//       resolve(greeting);
//     } catch {
//       reject(new Error("Cannot Greet!"));
//     }
//    });
   
//    console.log("1. Greetings Start");
   
//    promiseGreeting
//     .then((greeting) => console.log("t1. ", greeting))
//     .catch((err) => console.log("c1. ", err));
   
//    console.log("2. Greetings End");
   //predicting the output 

// Second one
// const greetRohan = new Promise((resolve, reject) => {
//     try {
//       const greeting = "Hello Rohan!";
//       resolve(greeting);
//     } catch {
//       reject(new Error("Cannot Greet!"));
//     }
//    });
   
//    const greetShyam = new Promise((resolve, reject) => {
//     try {
//       const greeting = "Hello Shyam!";
//       resolve(greeting);
//     } catch {
//       reject(new Error("Cannot Greet!"));
//     }
//    });
//    console.log("Greetings Start");

//    greetRohan
//     .then((greeting) => console.log(greeting))
//     .catch((err) => console.log(err));
   
//    greetShyam
//     .then((greeting) => console.log(greeting))
//     .catch((err) => console.log(err));
   
//    console.log("Greetings End");

//predicted correctly

//third one
// const greetRohan = new Promise((resolve, reject) => {
//     try {
//       const greeting = "Hello Rohan!";
//       resolve(greeting);
//     } catch {
//       reject(new Error("Cannot Greet!"));
//     }
//    });

// const greetShyam = new Promise((resolve, reject) => {
//     try {
//       const greeting = "Hello Shyam!";
//       resolve(greeting);
//     } catch {
//       reject(new Error("Cannot Greet!"));
//     }
//    });

// greetRohan.then((val)=>{
//     console.log(val)
//     greetShyam.then((val1)=>{
//         console.log(val1)
//     }).catch((err)=>{
//         console.log(err)
//     })
// }).catch((err)=>{
//     console.log(err)
// })
