//ES6 

//provide classes

class user {
    constructor (Username, email, password){
        this.Username = Username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password} abc`;
    }

    userNameCase(){
        return `${this.Username.toUpperCase()}`
    }
}

const obj = new user("Adam", "g@gmail.com", 234)
console.log(obj.encryptPassword())
console.log(obj.userNameCase())