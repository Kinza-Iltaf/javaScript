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

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({userName: "javaScript", Password: "1234"})
        }
        else{
            reject("Error:JS went Wrong:")
        }
    },1000)
})

// async function consumePromiseFive(){
//    const response =  await promiseFive
//    console.log(response);
// }

// consumePromiseFive();

async function promiseSix(){
    try
   { const response = await promiseFive
    console.log(response);}
    catch(error){
        console.log(error);
        
    }   
}

promiseSix()

// async function getAllUsers(){
//    const response = await fetch( 'https://jsonplaceholder.typicode.com/users')

//    const data = await response.json();
//    console.log(data)
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) =>{
    console.log(data)
}).catch((error) => console.log(error))

//fetch queue: micro fast queue or it is also called priority queue as well.

// fetch call => two tasks performed.
//1. data (memory taking) => 1. on fulfilled (promise resolve) 2. on rejected (promise reject)

// browser => network request => 1. accept 2. reject 

// network error (404 etc) request jany k bad he aarahy hotain hain so that is also store in onfulfilled


//when we create any variable to hold the fetch response then it is filled by data that is fulfilled by on-filled or on-reject then the declared variable for taking fetch data is filled by data it is data responsibility





