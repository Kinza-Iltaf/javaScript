//object literal : simple object (basic unit)
//two things : properties and methods

const obj = {
    username : "Adam",
    password : 2435,  //properties

    userMarkssum : function(){
        const english = 93;
        const urdu = 12;
        console.log(`This marks is of student named ${this.username}`)
        return english+urdu;

        //this key word is used for context
        

    }
    
}
const sum = obj.userMarkssum()
console.log(`Total marks are ${sum}`);

//this => functional executional context
//this => global executional context


//construction function => new keyword => from one object we can create multiple instances

// new keyword => new instance create 



