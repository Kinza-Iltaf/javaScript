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
let obj = info{
    name : "helina",
    age : 23,
}
// function

let func = function (){
    console.log("hello world!")
}

