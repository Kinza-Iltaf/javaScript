//Truthy Values => which will always gives us true value

//non_empty string, non_zero number (it can be negative values as well), empty object and array , function, date_object  , "false" its also now string , " " there is space so its also truthy value , "0" again string

//empty array

const StudentList = [];

//checking

if(StudentList.length==0) //without zero is also right
{
    //console.log("empty array");
    
}

//for object

const userInfo = {}

if(Object.keys(userInfo).length==0)//without length is also right
{
    //console.log("empty object");
    
}

if(-2){
    //console.log("not falsy value");
    
}
else{
    //console.log("falsy value");
    
}

//falsy value 

//false , 0 , -0(interview) , empty string , null , undefined , BigInt 0n etc

let name; //practical for undefined value
if(name){
    //console.log("Not falsy value");
    
}
else{
    //console.log("falsy value");
    
}

// false == 0 => true
//false == "" =>true
// 0 == "" => true

//nullish coaliscing operators (??) check only on two keywords : undefined , Null

//if we are expecting multiple values for single variable so there is possibility that we get Null or undefined value which can stop the whole execution of our program so we use coaliscing operator

let age

age = null ?? 4 

//console.log(age);

//ternary operator

 //condition ? ture : false

 let score = 90
 //score>=90 ? console.log("A"):console.log("Other than A");
 
 
