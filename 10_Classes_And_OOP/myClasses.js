//ES6 

//provide classes

// class user {
//     constructor (Username, email, password){
//         this.Username = Username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password} abc`;
//     }

//     userNameCase(){
//         return `${this.Username.toUpperCase()}`
//     }
// }

// const obj = new user("Adam", "g@gmail.com", 234)
// console.log(obj.encryptPassword())
// console.log(obj.userNameCase())


// this task without classes

const User = function ( userName, email, password){
    this.userName = userName;
    this.email = email;
    this.password = password;

}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.ToUpperCase = function(){
    return `${this.userName.toUpperCase()}`
}

const another_obj = new User("Fatih","Fatih@gmail.com",123 )

console.log(another_obj.encryptPassword());
console.log(another_obj.ToUpperCase());