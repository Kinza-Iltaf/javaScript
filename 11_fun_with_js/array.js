// Array types

//array ke different type ke optimization hotay hain

//continouse (packed SMI)   and holy

// SMI (small integers)
//packed Element
//double (float, string)

//array k andar element hotain hain

const arr = [1,2,3,4,5]  //packed SMI
arr.push(6.0) //now its packed double SMI
arr.push('7') //string now its packed SMI

//aik dafa double smi ban jay pr dobara se packed smi nahy banta chahy wo value delete b hojay

arr[10] = 12; //Holy  element

//how the elements are found in array 

//1. bound check (check lenght if out of index return undefined)

//2. hasOwnProperty (arr,9) at 9th index is there any property

//3. hasOwnProperty(arr.prototype, 9)

//4. hasOwnProperty(object.prototype, 9)

//hasOwnProperty (most expensive check in JS because of holes so holes are very expensive)

// from optimization point of view

// SMI > double > packed

// H_SMI > H_double > H_packed

//once the optimization became down grade then its almost impossible to make it up grade






