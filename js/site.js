//Collect values from page (string)
//controller function
    function getValue(){

        document.getElementById("alert").classList.add("invisible");


        let userString = document.getElementById("reverseMe").value;
        let revString = reverseString(userString); // allows next function to see the private variable
        displayString(revString);
    }

//reverse the string
//logic function

    function reverseString(userString){

        let revString = "";

        //reverse a string using a for loop

        for (let index =(userString.length - 1); index >= 0; index--) {
            
            revString += userString[index];

        }

        return revString;

    }

//display message to the user
//view function

    function displayString(revString){

        //write message, then open alert

        document.getElementById("msg").innerHTML = `Your string reversed is ${revString}`;  
        document.getElementById("alert").classList.remove("invisible");
        
    }