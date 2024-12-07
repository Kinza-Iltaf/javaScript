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

