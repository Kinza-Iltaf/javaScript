//merging two arrays
const evenNum = [0,2,4,6];
const oddNum = [ 1,3,5,7];

//merging: the next array will be add as single element of an array
// evenNum.push(oddNum);

// console.log(evenNum.length);

//contactination

const newArr = evenNum.concat(oddNum);
// console.log(newArr);

//spread method... used to cantact more then two arrays. element the limitation of cantact method.
const mix_num = [23,52,51];
const new_num = [...evenNum,...oddNum,...mix_num];
// console.log(new_num);

const new_method = [2, [4, 5 , 34,6,2], 3 , 5, [45, 34, [35, 25,6]]];
const flat_arr = new_method.flat(1);
console.log(flat_arr);

//in web scraping when we want to get the data in form of array
console.log(Array.isArray("Adam"));
console.log(Array.from("Adam"));

//through from if we want to give the key value pair then it will return the empty array becuase in this case we have to define specifically
console.log(Array.from({name:"Adam"}));

//converting different variable into array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));



// **********************///
//combining two arrays

//if we use push then it will take another element as a single element

//so we can we "concate" method

//but here is a problem when we have more than two arrays so that's why we use spread operator => ...arrayName

//flat(depth) method => to flat the nested array
//

