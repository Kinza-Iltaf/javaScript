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


//**************************//
//array : collection of multiple items in single variable

// in js array => resizeable

//not associative => not access by arbitrary string like one only by myarr[1]

//copy operation => shallow copy =>reference type > changes in original value

//array method => push(element) , pop()(last element remove) , shift()remove , unshift(element)(add element) but have drawback that if we have a big array having 1000 elements then all will shift one place which is time consuming

//includes , indexOf(3) => check value at this index if not then return -1

//join => combine two arrays and convert into string

//slice => return a section of an array myarr.slice(1,6) elements from 1 to 5

//splice => manipulate the original array too and the last index (range) is also included




