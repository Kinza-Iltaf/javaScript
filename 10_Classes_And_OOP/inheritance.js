//inheritance

//child can access parent functionalities

//parent can not

//child and parent are not equal === false

//to check the inheritance relation we use

//instanceof

class User{
    constructor(userName){
        this.userName = userName;
    }

    loggedMe(){
        return `${this.userName} is loggedin`
    }
}

class Teacher extends User{
    constructor(userName,email,password){
        super(userName);
        this.email = email;
        this.password= password;
    }

    CourseAdded(){
        return `${this.userName} added new course`
    }
}
const firstObj = new User("Adam")
console.log(firstObj.loggedMe());
const obj = new Teacher("Mahesh", "Mahesh@gmail.com", 123)
console.log(obj.loggedMe())
console.log(obj.CourseAdded())

console.log(Teacher instanceof User)
console.log(obj instanceof User)
console.log(firstObj instanceof User)
console.log(Teacher instanceof User)
