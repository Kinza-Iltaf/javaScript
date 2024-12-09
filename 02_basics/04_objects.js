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

console.log(user_info);

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

console.log(user.user_name.full_name.last_name)