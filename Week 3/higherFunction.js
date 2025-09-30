//Higher order function
/*const func = function(parameterOne, parameterTwo){
    parameterOne()
};

const func2 = function() {
    return () =>{
        console.log("i am the third function")
    }
};

func(func2, "testing");*/


/*1 `Create an HTML form that allows a user to enter a list of numbers (separated by commas).
When the user submits the form, use higher-order functions (map, filter, or reduce) in JavaScript to:
 1. Convert the string input into an array of numbers.
 2. Filter out numbers less than 10.
 3. Multiply each remaining number by 2.
 4. Display the final result on the page.`
  
  
  2 `Build an HTML form where a user can enter a list of student names (comma separated) and then type a name to search for.

When the form is submitted:
 1. Convert the list of names into an array.
 2. Use find to check if the student exists.
 3. Use findIndex to get their position in the array.
 4. If the student exists, display a message like:
“Student John found at position 2.”
 5. If the student doesn’t exist, display “Student not found.” after 2 seconds (using setTimeout).
  `;*/

  //Assignment one
const form = document.getElementById('formOne')
const input =document.getElementById('inputOne')

const callback = function(event){
    event.preventDefault();

    const userInput =input.value;


    console.log(userInput)
    
}

form.addEventListener("submit", callback);

//  1. Convert the string input into an array of numbers.