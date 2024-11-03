// string declaration and cancatenation
const f_name = "John"
const s_name = "Ibrahim"

console.log(f_name + s_name + "Vemo")

// But it is outdated method

// for modern way we use string interpolation in which we use the backticks (``)

console.log(`Hello ${f_name.toUpperCase()} ${s_name} to our program`)

// string declaration in new way

const myName = new String("Mike") //string declaration method in object type.
console.log(myName)

// finding the string length
console.log(myName.length)
console.log(myName.toUpperCase())

// finding the value at specific index
console.log(myName.charAt(3))
console.log(myName.indexOf("M"))
// breaking string into parts or sanitaization:
const designation = myName.substring(0,3);
console.log(designation)

// trim method : it is used to remove all the extra spaces and line terminator.
// we also have the trim start method to remove the spaces from start and trim end to remove spaces from end. 
const newName = "  Adam "
console.log(newName)
console.log(newName.trim())
// replace method
const myURL = "https://google%20my.com"
console.log(myURL)
console.log(myURL.replace("%20","-"))


