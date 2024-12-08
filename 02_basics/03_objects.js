//there are two ways to declare the objects
//1) literal   2) constructor
 // there is also concept of singleton (object of constructor)

 //object literal (keys:values)

 const sym = Symbol("key2");
 const js_user = { 
    name : "Adam",
    "full name" : "john Adam",
    age: 23,
    [sym] : "key2",
    Mail: "Adam@gmail.com",
    isloggedIn : false,
    last_login_days: ["sunday","saturday"]
 }

 console.log(js_user.name);
 console.log(js_user["name"]);
 console.log(js_user["full name"]);
 console.log(typeof(js_user[sym]));

