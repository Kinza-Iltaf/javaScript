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

