//objects singleton (how to declare objects through constructor)

//literal object
const use_info = {};
//singleton object
const user_info = new Object();
// console.log(user_info)
// console.log(use_info)

//simple way
user_info.id = "123abc";
user_info.gmail = "someone@gmail.com";
user_info.isAvailable = false;

// console.log(user_info);

//objects inside another object

const user = {
    age : 23,
    gmail :"someone@gmail.com",
    user_name : {
        full_name: {
            first_name : "Adam",
            last_name : "smith"

        }
    }
}

// console.log(user.user_name.full_name.last_name)

 

//  


 

// combining two objects

// const obj1 ={
//     1: "a",
//     2 :"b"
// }

// const obj2 ={
//     3: "a",
//     4 :"b"
// }
// const full_details = Object.assign ({},user_info,user);

const full_details = {...user,...user_info};


// first object is target where all the rest of the objects will be stored.
// console.log(full_details);

const database =[ 
    {
        id :1,
        name: "john"
    },
    {
        id :2,
        name: "mohn"
    },
    {
        id :3,
        name: "fohn"
    }
]
// console.log(database[0].name);
// console.log(Object.keys(user));
// console.log(Object.values(user));
console.log(Object.entries(user)); //key and value is treated as array
// console.log(user.hasOwnProperty('gmail'));
//check the key exist or not to avoid the crashing

//objects destructuring
const course = {
    courseName : " js course",
    price : " 2399",
    courseInstructor : "Johm smith"

}
 //accessing again and again through dot operator make the code a bit complex so we destructure the object

 const {courseInstructor:ins} = course;
//  console.log(ins);
 //define shortest name




 //************************/
 //Object Part 2 summary

 //combining two or more objects
 //object.assign(target_objec(empty), obj1,obj2 (all existing which we want to combine))

 //for combination ... can use spread operator

 //printing keys of an object

 // object.keys(object_name)
 //object.values(object_name) => now its converted to array and we can perform different operation on it

 //if we want to access the object all element in form of keys value pairs then we use "entries method"

 //object.entries(object_name) //every pair is now array

 //want to access a specific value so we have to check whether it exist or not then 

 //object_name.hasOwnProperty(property(name))

 


