//defining new object of number type specifically....
const balance = new Number(2000871)
console.log(balance)
//simple number type of data
const score = 342
console.log(score)
console.log(score.toString().length)
const price = 234.6342
console.log(price.toFixed(2)) // round off the values after point
console.log(price.toPrecision(4)) //focus on digit before the point

const population = 1209080000;
console.log(population.toLocaleString("en-PK"));  //to easily read a huge number by putting commas between them

// ####### Math  ###########
console.log(Math);
const img_num = -23
console.log(Math.abs(img_num)) //change from negative to positive

console.log(Math.round(4.7))
console.log(Math.ceil(4.7))
console.log(Math.floor(4.7))

console.log(Math.min(0,5,2,6,2))
console.log(Math.max(0,5,2,6,2))
console.log(Math.pow(2,3))

console.log(Math.random()) //it value will always be a random value from 1 to 0.

console.log((Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1) + min))



