//reduce method

//take all element  of an array and combine them as one

//parameters => accumulator , current , initial

const prices = [34,63,62,25,62,634]

const result = prices.reduce(function(acc, cur){
   // console.log(`accumulater ${acc}, current ${cur}`)

    return acc+cur
}, 1)

//console.log(result);


//practice reduce

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

  const totalPrice = book.reduce( (acc,cur) => (acc+cur.price),0)

  console.log(totalPrice);
  