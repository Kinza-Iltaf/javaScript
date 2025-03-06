//for each loop does not return any value

//filter return values as well

//filter => take call back just like forEach

//it return value on the basis of some condition when that meets

const score  =[3,5,6,1,6,3]
const result = score.filter( (num) => num%2==0) //will check the condition that is just like a filter for return values

//if we use {} then we should write return keyword before condition => {return num%2==0}


//console.log(result);


//the above thing through forEach loop

const newArr = []

score.forEach( (item) => {
    if(item % 2 == 0){
        newArr.push(item)
    }
})

//console.log(newArr)

//retuired a lot of code but we can achieve things in this way as well

//practice filter

const book = [
    {
      "title": "The Silent Patient",
      "price": 15.99,
      "genre": "Thriller"
    },
    {
      "title": "Gone Girl",
      "price": 15.99,
      "genre": "Thriller"
    },
    {
      "title": "Atomic Habits",
      "price": 18.50,
      "genre": "Self-Help"
    },
    {
      "title": "The Power of Habit",
      "price": 18.50,
      "genre": "Self-Help"
    },
    {
      "title": "Dune",
      "price": 22.99,
      "genre": "Science Fiction"
    },
    {
      "title": "The Three-Body Problem",
      "price": 22.99,
      "genre": "Science Fiction"
    },
    {
      "title": "The Alchemist",
      "price": 12.99,
      "genre": "Philosophical Fiction"
    },
    {
      "title": "The Midnight Library",
      "price": 14.99, 
      "genre": "Fiction"
    },
    {
      "title": "1984",
      "price": 13.50,
      "genre": "Dystopian"
    },
    
  ]

  const thrillBooks = book.filter( (bk) => bk.genre === "Self-Help")

  //console.log(thrillBooks);
  