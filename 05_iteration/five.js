// forEach => can not break => will run till end of the element

//for runing function of each value => doing something on every item one by one

const names = ["Alex", "john", "Mike"]

names.forEach(function (val ){
   // console.log(val);
    
})

names.forEach( (val) => {
    //console.log(val);
    
})
//for value, index and whole array which hold by each single element of the array
names.forEach((item,i,arr)=>{
//console.log(item,i,arr);

})

//objects

const programingFile = [
    {
        lang : "c++",
        file : "cpp"
    },

    {
        lang : "python",
        file : "py"
    },

    {
        lang : "c_sharp",
        file : "cs"
    }
]

programingFile.forEach( (item) => {
//console.log(item.lang) //for all languages
//console.log(item.file);//for all file
    
});


