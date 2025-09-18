//Higher order function
const func = function(parameterOne, parameterTwo){
    parameterOne()
};

const func2 = function() {
    return () =>{
        console.log("i am the third function")
    }
};

func(func2, "testing");