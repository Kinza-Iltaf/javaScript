let score = 34
console.log(typeof score)
console.log(typeof(score))

// 33 => numbers
// 33abc => numbers (confussing but its type is NaN)
// true =>1
// false => 0
// typeconversion
// numbers conversion, string conversion, boolean converstion
// ######## Operations ########
// append
s1 = "Hello"
s2 = " John"
s3 = s1 + s2
console.log(s3)

// if we are performing different operatioin in same paranthesis then the the rest numbers will be considered according to first number.
console.log(2+3+"3")   //treat as numbers
console.log("2"+3+3)  // treat as string

//summary
//3 =>number
//3a =>NaN(not a number)
//value = true => 1 
//value = false =>0
//conversion=> new variable = typename(caps)(varName).....let score = Number(grade)
// "" =>false
//"name" =>true
//first string then rest will consider as string("2"+3+3) output: 233
//firt number then rest numberconsole.log(2+3+"3")output : 53
