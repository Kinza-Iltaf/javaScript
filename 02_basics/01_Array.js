const myArr = [0,2,6,2,61,5];
//accessing Array all element at once
console.log(myArr);

//accessing specific element of array at specific index

// console.log(myArr[3]);

//array methods
myArr.push(23); //add Element to array at the end
myArr.push(124)
// console.log(myArr);
myArr.pop();//remove last value
// console.log(myArr);
myArr.unshift(12342); //shift all the array element and add the new element to the start but if arrray has thousand values so it will become a time consuming process which will load our system so it is not prefarable to use.

// console.log(myArr);
myArr.shift(); //remove first element of array
// console.log(myArr);

console.log(myArr.includes(0)); //check for the mentioned element that it exist or not in array

// console.log(myArr.indexOf(61));

const newArr = myArr.join(); //convert the array into string
// console.log(newArr);
console.log(myArr);
console.log(myArr.slice(1,4));
console.log(myArr.splice(1,4)); //it also include the last element but it manipulate the original array too.
console.log(myArr);