function addition(num1 ,num2) // num1 and num2 are parameters
{
    // console.log(num1+num2)
}

// addition(3, 6) 
//3 and 6 are here arguments

//storing function value in variable

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
console.log(loggedinuser);