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

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName: "Adam", email : "google@gmail.com"})
    },2000)
})

promiseThree.then(function(user){
    console.log("User Data is:", user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({userName: "James", Password: "1234"})
        }
        else{
            reject("Error:Something went Wrong:")
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.Password
})
.then((Password) => {
    console.log(Password);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("The promise is either resolve or rejected:")
})