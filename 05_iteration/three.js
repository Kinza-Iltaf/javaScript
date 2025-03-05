//Array specific loop
//for of loop

//storing string in array ["", ""]
//storing objects in array [{},{}]

const Arr = [2,5,7,3,7]
//for each iteratable objects like string, list, object , array etc
for (const i of Arr) {
    //console.log(`${i}`);
      
}

const Greetings = "Hello! Class"
//will terminate when find space
for (const greet of Greetings) {
    if(greet==" ") break;
    //console.log(`${greet}`);   
}

//maps : key value pair 
//unique no duplication
//key can b string number anything

const myMap = new Map();
myMap.set("name1", "Alex")
myMap.set("name2", "John")
myMap.set("name3", "Mikal")
//console.log(myMap.get("name"));

//console.log(myMap);


//for all values in map then loop will print it as an array the all elements

for (const key of myMap) {
    //console.log(key);
    
}

for (const [key,value] of myMap) {
   // console.log(key ,':', value);
    
}

//for object it will not work  object=> not iteratable






