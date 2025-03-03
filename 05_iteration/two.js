//while and do while loops

let index = 1
while (index <=10) {
    //console.log(`Value of index is ${index}`);
    index = index+2;
    
}

const studentNames = ["Hamza", "Ali" , "Max"]

let Arr_index = 0

while (Arr_index<studentNames.length) {
   // console.log(`Student at index ${Arr_index} is ${studentNames[Arr_index]}`)
    Arr_index = Arr_index+1
}

//do_while loop is used when we want to execute the body of the loop at least once regardless of the condition

let count =1
do {

    //console.log(`Value : ${count} `);
    count = count+1
    
    
} while (count>=5); //here the condition is false but still the loop body will execute once