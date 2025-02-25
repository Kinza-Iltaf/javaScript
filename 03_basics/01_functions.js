function addition(num1 ,num2) // num1 and num2 are parameters
{
    // console.log(num1+num2)
}

// addition(3, 6) 
//3 and 6 are here arguments

//storing function value in variable but the function must have return value

var addition =  addition(2,5);
console.log(addition) //give undefined because function does not return any value

function addition2(num1 ,num2) // num1 and num2 are parameters
{
    var result = num1+num2;
    return result;
}

var add = addition2(1,5);
// console.log (add);

function loginInfo(userName = "smith") //smith is default value so if the user does not entered any value the smith will be used by default
{
    if(!userName){
        console.log("user name is not entered!")
        return
    }
    return `${userName} just loggedIn`;
}

var loggedinuser = loginInfo("Adam");
// console.log(loggedinuser);


//when we don't know about the number of parameters in function(use rest operator...)
function cal_cart_price (...num){
    return num;
}
// console.log(cal_cart_price(23,634, 256 ,2523))


// object passing to the function
// var myobj = {
//     name: " Adam",
//     price: 120,
// }
function obj_calling(anyobject){
    console.log(`username is ${anyobject.name} and the price is ${anyobject.price}`);
}

// obj_calling(myobj)
obj_calling({
    name : "Sam",
    price :  123
})

//passing array to the function
const myArr = [23,534, 534, 52, 62, 234]

function returnArrayVal(getArr){
    return(getArr[0])
}

console.log(returnArrayVal(myArr))


//********************************/
//function summary
// function() => Excecution
//function => reference

//parameters

//arguments

//return value exist then can store that in another varuable

// parameter given but not define => undefined not null

//to avoid the undefined parameter case just pass the default parameter function(name="me")so if the name or parameter is defined like pass then the default parameter value will override

//we can verify this through condition like name===undefined then enter name please

//when we don't know about the exact number of parameters in function  => rest operator 

// syntax => ...parameter name => now it will accept all the parameter by default

//we can pass array, object etc to a function as parameter



