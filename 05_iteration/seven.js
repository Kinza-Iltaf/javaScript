//map => return a value

const grades = [45,53, 12, 53,32]

const newGrages = grades.map( (g) => g+10)

//console.log(newGrages)


//chaining

//applying more than one method consectivly

const num = [ 2,3,4,5,6]
const result = num
                  .map((i) => i*4)
                  .map((item) => item +1)//this will apply on the above map function values not on original values
                  .filter( (res) => res%2==0)
console.log(result); //empty aaray => no even number

