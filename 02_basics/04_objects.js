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

// const full_details = {user_info,user};
//combining two objects

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
console.log(database[0].name);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user)); //key and value is treated as array
console.log(user.hasOwnProperty('gmail'));//check the key exist or not to avoid the crashing

//objects destructuring
const course = {
    courseName : " js course",
    price : " 2399",
    courseInstructor : "Johm smith"

}
 //accessing again and again through dot operator make the code a bit complex so we destructure the object

 const {courseInstructor:ins} = course;
 console.log(ins);//define shortest name


