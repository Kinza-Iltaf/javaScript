let myDate = new Date();
// console.log(myDate);
//conversion to string

//now its a bit in readable format like web/feb
// console.log(myDate.toString())

// console.log(myDate.toLocaleString())

//good and readable
// console.log(myDate.toDateString());

// console.log(myDate.tOJSON());

//creation of specific date
//date are starting from 0=january
//date is an object type of variable
let myCreatedDate = new Date("2023,2,29");
// console.log(myCreatedDate.toDateString())

//exact now timing 

let presentDate =   new Date;
// console.log(presentDate.getTime());
// console.log(Math.ceil(Date.now()/1000));

let newDate = new Date;
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());





// date is object
//to second divide by 1000
//to get present instance .now()
//of specific date getTime()
//to get day or month from date use .get(name)
//in localestring we can customize the date by passing parameters to it






