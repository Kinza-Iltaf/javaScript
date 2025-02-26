//this => tells us about current context

// in browser the global object is window object

// in environment the this => gives us empty object


const user ={
    name : "Hamza",
    age : 23,
    Message : function(){
         console.log(`${this.name} welcome to our page`)
    }

}

// user.Message();

function add(){

    let userName = " hamza"
    //console.log(this.userName); it will give undefined (with variable)
    
    //console.log(this) only this will give a lot of calculation about system (no variable inside the function then)
}

 //   add()


//this does not work inside the function and gives undefined when we are trying to access any variable through it

//if inside the function we console the keyword this then it return a lot of calculation and global values and performances

//arrow function   () => {}  ...this is the funtion now => simple , easy and clear code

// in arrow function it inherit the "this" from where it is defined (global) not where it is called

//arrow function

 const name = "Hamza"
const arrow_function = () => {
   
    console.log(`${this.name} welcome`)
}

// arrow_function();  undefined output

//implecent way

let result = (num1, num2) => num1+num2

console.log(result(3,6));

//in implecet way {} (explicet way) then return otherwise()don't need to use return keyword


