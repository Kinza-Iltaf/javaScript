//getter and setter is just like private type property and we encapsulate it, hidding its implementation details

class User{
    constructor(password,email){
        this.password= password;
        this.email=email
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    get password(){
        return `${this.pass.toUpperCase()}Adam`
    }

    set password(password){
        this.pass=password
    }
}

const obj= new User( "ahmar","A@gmail.com")
// console.log(obj.password);
// console.log(obj.email)


//how to define getter and setter through function

function User1(Password, email){
    this._Password = Password;
    this._email = email;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(email){
            this._email = email;
        }
    })

}

const me = new User1(123,"k@gmail.com")
// console.log(me.email)

//how to define getter and setter through objects

//_ make things private

const ob = {
    _name : "Adam",
    _email : "A@gmail.com",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    }
}


//object creation : through factory method

//object reference pass 

const now = Object.create(ob)
console.log(now.email)


