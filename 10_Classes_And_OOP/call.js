//we have function inside another function 
// in call when the inside function is called its execution context is removed but we need to hold it so we use .call function and here we pass this by default 

function setUserName (userName){
    this.userName = userName

}

function createUser(userName, email, password){
   // setUserName(userName) : reference
   //for call
   setUserName.call(this,userName)
    this.email = email
    this.password = password

}

const calling = new createUser("Adam", "social@gmail.com", 1245)
console.log(calling);
