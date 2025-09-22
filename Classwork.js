const celcuis =[20, 30, 40, 50];

const toFahrenheit = celcuis.map((value) => {
    return (value * 1.8) + 32;
});
console.log(toFahrenheit)


//filter()

let movies = [
  {name: "Avengers", rating: 8},
  {name: "Sabrina", rating: 4},
  {name: "How to kill a gorrila", rating: 2},
  {name: "Korean movies", rating: 9},
  {name: "Criminal", rating: 10},
  {name: "Dexter", rating: 3}
]

const filteredMovies = movies.filter((film) => {
  return (film.rating > 5)
})


let cart = [
  { item: "Laptop", price: 350000 },
  { item: "Phone", price: 120000 },
  { item: "Earphones", price: 8000 },
  { item: "Mouse", price: 5000 },
  { item: "Monitor", price: 90000 }
];

const rateMovie = cart.filter((price) => price > 50000
 )

 console.log(rateMovie)

/*
const expensiveItems = cart.filter((items) => {
  return items.price > 50000
})

console.log(expensiveItems)*/



//you use reduce when the outcome will result to a value
let numbers = [10, 20, 30, 40, 100, 60];

const sum = numbers.reduce((acc, curr) => {
return acc + curr
}, 0)



let listOfNumbers = [5, 12, 7, 30, 18];

let max = listOfNumbers.reduce((acc, curr) => {
  return curr > acc ? curr : acc
}, 0)

console.log(max)

let names = ["innocent", "grace", "nkechi", "innocent", "grace", "paul"]

const occurenceObj = names?.reduce((acc, curr) => {
  acc[curr] = acc[curr] ? acc[curr] + 1 : 1
  return acc;
}, {})

console.log(occurenceObj)

 

 