//IIFE => Immediately invoked Function Expression

//to run the function immediately after defination

//to avoid global scope pollution
//immediate execution

//For IIFE two paranthesis => (for function defination)(Excecution call)

(function IIFE_fun(){
    //name IIFE becuse it has name(IIFE_fun)
    console.log(`Hi, I m learning IIFE`);
    
})() ; //now the variables inside () will not interact with global scope variables

//IIFE don't know about its context like where it has to end so putting the semi colon at the end is compulsory

(() => {
    console.log(`IIFE with arrow function`);
    
})();

//arrow function with parameters

((user="sohn")=>{
     //simple IIFE becuse fun has no name
    console.log(`welcome ${user} to arrow parameter function`);
    
})("John"); //also pass the default parameter


//JS excecution context

//in js first thing that come into existance => Global excecution context and it is store in a variable => this

//browser Global excecution context => window object

//code environment => empty brackets {}

//js is single threaded

//because it has only one call stack => one task at a time => order => top to bottom

//problem => no async feature =>  we have loop that take 5 mints so js will stop there without excecution of next line so all task will block till 5 mints => generate blocking threat

//solution => async feature + event loop

// call stack (tasks run synchronously way)
//web API's (setTimeout, fetch, DOM events)
//calback queue (to go back to the position)

//functional excecution context

//eval execution context

//in js code in run into two phases

// 1. memory creation phase (memory allocation for  variables and its value would be undefined at that stage not operation on them executed like add, sub etc) in case of function the name of the function is store and instead of undefined the defination of that function (all body ) goes in it

// 2. execution pahse => here the real value is assigned as the user assign to that variable

//for function

//new execution context come into existence =>that contain 1.new variable environment 2.execution thread  now again two functions will be repeated 1. memory creation 2. execution

//stack => LIFO 




