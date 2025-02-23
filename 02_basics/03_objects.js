//there are two ways to declare the objects
//1) literal   2) constructor
 // there is also concept of singleton (object of constructor)

 //object literal (keys:values)

 const sym = Symbol("key2"); //symbol declaration
 const js_user = { 
    name : "Adam",
    "full name" : "john Adam",
    age: 23,
    [sym] : "key2",  //symbol as key value
    Mail: "Adam@gmail.com",
    isloggedIn : false,
    last_login_days: ["sunday","saturday"]
 }

//  console.log(js_user.name);
//  console.log(js_user["name"]);
//  console.log(js_user["full name"]);
//  console.log(js_user[sym]);

 //changing the value of key of the object

 js_user["full name"] = "Maham";
//  console.log (js_user["full name"]);

 //if we want to no one can modify the value then we can lock the value by freeze method

//  Object.freeze(js_user);

 js_user.age = 324;
//  console.log(js_user);

js_user.Greetings = function(){
    console.log(`Hello JS user!, ${this["full name"]}`); //( ` -> backtack ) string interpolation.
}

js_user.GreetingsTwo = function(){
    console.log("Hello JS users Two!");
}

console.log(js_user.Greetings());


//***********************************/
//summary
//two ways of declaration

//1) Literal
//2) constructor => (one another singleton) object.creat

//Literal => const name = {} (object created)

//accessing object => dot ["string" for long variable name and for symbol type variable]

//changing object => obj_name.key_name =newVal

//locking object that no one can change it
//object.freeze(obj_name)



