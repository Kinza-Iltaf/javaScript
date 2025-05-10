// there are two things related to promises
//1. creation   2. consumption

//take two parameters
//1. resolve    2. reject

const PromiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asynch Task is complete:");

        resolve();
        
    },1000)
})

PromiseOne.then(function(){
    console.log("promise consumed:")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
         console.log("Asynch Task 2");
    resolve();

    })
   
}).then(function(){
    console.log("promise consumed:");
})