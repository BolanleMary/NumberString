const user ={
    name: "Jane Doe",
    email: "jane.doe@example.com",
    address: "123 Main St, Anytown, USA",
    listOfChildren: ["joshua", "divine"]
    //run: () =>
}


const item ={
id: 1,
name: "Laptop",
description: "This is the first item",
price: 9.99
}

const listOfItems = [];

//
const arrOfRandomElements = [1, 2, 7, {name: "peace"}, [],["doris"], item, "innocent"] 
console.log(arrOfRandomElements[3])
console.log(listOfItems[ 0])

const countries =["Nigeria", "Ghana", "Kenya","South Africa", "Rwanda"]
const favoriteCountry= countries[4]
console.log(favoriteCountry)
const size =countries.length
console.log(countries.length)
console.log(size)
console.log(countries[countries.length -1]) //last element

//mutate in array 
countries[0] ="canada"
console.log(countries)

//concat
const listOfMobilePhones =["iphone", "samsung","acer" ,"at&t", "lenovo"]
const listOfLaptop = ["hp", "mac","dell"]

const listOfItemsInStore = listOfMobilePhones.concat(listOfLaptop)

console.log(listOfItemsInStore)


