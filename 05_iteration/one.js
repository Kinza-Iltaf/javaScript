//for loop

//steps : 1.initialization 2.condition check 3.body execution 4.increment (depends (if prefix ++i (then increment will take place before execution)))

for (let index = 0; index < 11; index++) {
   // console.log(index); // 0 to 10
       
}

//for duplication : ctrl+d

//lets try nested loop

for (let i = 0; i <=10; i++) {
  // console.log(`Table of ${i}`);
   for (let j = 0; j <=10; j++) {
  // console.log(`${i}` + `*` + `${j}` + `=` + `${i*j}` )
   
   }
      
}

//loop through array

const Numbers = [ 2,6,365,24,52,25]
//console.log(`Even Numbers are:`);

for (let n = 0; n < Numbers.length; n++) {
   if(Numbers[n]%2==0){
      //console.log(`${Numbers[n]}`);
      
   }
   
}

//sometimes we don't want to run the loop till last of the value and we want to stop it on the basis of some condition

//for this we use two key words

//break and continue

for (let index = 1; index <= 20; index++) {

   if(index==5){
      //console.log("5 Detected");
     
      break;
   }
  
  //console.log(`Values : ${index}`);
  
   
}

//continue keyword only skip the current iteration but does not break the loop





