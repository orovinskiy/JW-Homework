let valid = false;
let number;
while(!valid){
    number = parseInt(prompt("Enter a positive number that's under 500"));
    if(isNaN(number)){
        alert("Only positive numbers are allowed.");
    }
    else if(number <= 0){
        alert("Number cant be a negative or zero");
    }
    else if(number > 500){
        alert("Number cant be higher then 500");
    }
    else{
       valid = true;
    }
}

if(valid){
    HeeHaw(number);
}

function HeeHaw(number){
    if(number > 0){
        HeeHaw(number-1);
        if(number % 3 === 0 && number  % 5 === 0){
            console.log("Hee Haw!");
        }
        else if(number  % 5 === 0){
            console.log("Haw!");
        }
        else if(number  % 3 === 0){
            console.log("Hee!");
        }
        else{
            console.log(number);
        }
    }
}