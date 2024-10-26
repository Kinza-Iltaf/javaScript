//simple comparison
console.log(2>1)
console.log(1<2)
console.log(2==4)
console.log(2==4)
console.log(2<=4)
console.log(2>=4)
console.log(2!=4)

// it become difficult when we are comparing two different type of variable like string and integer.

console.log("2">1)

console.log(null == 0)
// in equality it treat the null as number
console.log(null>=7)
// and in comparison it is converted to 0 first then its checked 

// strict conversion
// now at time of converstion the datatype would also be checked if not same error would occure.
console.log("2"===2)
