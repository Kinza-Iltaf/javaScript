// There are two datatypes on the basis of two things


// 1. how they are store in memory: premetive(7 Types) string , numbers, boolean , null , undefined , symbol , bigint (for big scientific values)

const number = 256
const numbers = 23.5
const isLoggedIn = false
const name = "Adam"
let temp = null
let grade; //undefined 
const id = Symbol(123)
const userId = Symbol(123)
console.log(id===userId)
//const bignum = 4566634348794735343n


// 2. how they are access : non primitive ( refrence type) (array , objects , functions)

// js is dynamic typed language.

// array
const arr = ["Adam", "Mike" , "Sara" , "Neha"]
// objects
let obj = {
    name: "helina",
    age: 23
};
// function

let func = function (){
    console.log("hello world!")
}

// ######################################
// there are two types of memory
// 1. stack (for primitive datatypes)

// when we are using the stack memory and declare a variable its means we are getting its copy.

// 2. heap  (for non primitive datatypes)

// when we are using the heap memory and declare a variable its means we are getting its reference. Change will occure in original variable

// stack memory example
let myName = "Adam"
let myNewName = myName

console.log(myName)
console.log(myNewName)

// heap memory example
let userOne = {
    name:"Mike",
    email:"email@gmail.com"
};

let userTwo = userOne 
userTwo.email = "iAm@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)


//summary
//two datatypes (on the basis of storing and retriving)
// 1.premitive(7 1.string  2.number  3.boolean  4.BigInt  5.Null  6.undefined  7.symbol)  2. non_primitive (reference type)(3  1.Arrays  2.Objects  3.Functions)

//datatype of non_primitive (object)


