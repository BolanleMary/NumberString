const nameOfPeopleInClass =['innocent', 'diana', 'you'
    ]
    let myPerson ='you'
    switch(myPerson){
        case "you":
            console.log("I am currently dealing with you");
            break; //without this the code will keep running 
            
            case "innocent":
            console.log("innocent is the facilitator")
            break;
            
            case "Diana":
                console.log("take diana")
break;
default:
    console.log("i don't know you")
    }

    //ternary operator(?). takes 3 operant. short code for if...else statement
    
    myPerson == "glory"? console.log("i am running when true") : console.log('running when false')

    //Scope; TYPE 1. GLOBAL SCOPE AND 2. Local scope

    const globalScope = true;
    const LocalScope = false

    {
        const itLocalScope = true;
        console.log(itLocalScope)//will work
        console.log(globalScope) // will still work
    }

    //console.log(itLocalScope) will not work cause it is outside its 
    //code block that is it is outside it local

    console.log (globalScope) //this will work cause it is not enclose and is a global scope


    {//parent scope
        {
         //nested scope  
         //things in parent scope will work here 
        }
    } //thing on nested scope wouldnt work here


    //Object
    const user = {
        name: "imo",
        email: "mail@gmail.com",
        maritalStatus: "married",
bloodGroup: "Y+",
Spouse:{
    name:"angel",
    email: "mail@gmail.com"
},
run:"i can run"

    }
    console.log(user)
    console.log(user.name)
    console.log(user.Spouse.email)
    //or
    console.log(user["Spouse"]["email"])

    user.name = "checking"
    console.log(user)