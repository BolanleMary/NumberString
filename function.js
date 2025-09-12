function sumOfTwoNumber() {
console.log(2+2)
console.log (5 + 6)
}

sumOfTwoNumber()

//You Can Pass argument. Argument are separated by comma
function TheSum(TheFirstNum , TheSecondNum){
    console.log(TheFirstNum + TheSecondNum)
}

//call it as much as you want
TheSum(10 , 20)
TheSum(50,500)
TheSum(3, 90)


function SumOfTwos(first,second ){
    const sum = 2 + 2
    console.log (sum)
console.log(first + second)
}

SumOfTwos(1,1)


function SumOfTwoss(first,second ){
    const sum = first + second;
    console.log (sum)
return sum; //this makes 
}

let test = SumOfTwoss(12 ,5);
console.log(test) //this will display undefined unless you return in the local scope


//IIFE- immediate invoke function
//you dont need to  call this the syntax ()(). example

(function(){
    console.log("checking")
})()

//Arrow function
//syntax ()=>{} . Example

const testFunction = ()=> {

} //we assign a variable to the arrow function