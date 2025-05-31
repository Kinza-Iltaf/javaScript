//we dont want to give access to every instance of the class so we make that method static

//this keyword does not work in static method



class User{
    constructor(username){
        this.username= username;
    }

    logMe(){
        console.log(`username: ${this.username} is logedIn `);
    }

 static createID(user){

    console.log(`user : ${user.username} has ID ${(Math.floor(Math.random()*20)+1)}`);
    
    
}

}

const newUser = new User("Kinza")
// newUser.createID()

class Teacher extends User{
    constructor(username,email)
    {
        super(username)
        this.email = email;
    }
}

const teacher = new Teacher("Talia Murad", "taly@gmail.com")

teacher.logMe()
// teacher.createID()

Teacher.createID(teacher)