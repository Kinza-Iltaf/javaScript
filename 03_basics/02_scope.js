//variables
let number = 10
var age = 23
const password = 234

// {} this is scope

if(true){

    let number = 10
var age = 23
const password = 234

} //inside of this is block scope 

//outside of these paranthesis is global scope and it it available inside the block scope and the block scope is not available in global scope

//now all variable has scope and can not be access outside the paranthesis except the var we can access it from anywhere in our program

//if we have nested functions or loops or conditional statements then the outer variable can be accessed by the inner loop or functions but the inner variable can not be used outside of paranthesis

function add(){
    let num1 = 2
    function display(){
        let num2 = 3
        console.log(num1)
    }

    // console.log(num2)
    display()
}

add()