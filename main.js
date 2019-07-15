// ASSIGNMENT QUIZ

// javascrit commands
"use strict";

//GLOBAL VARIABLES
let num = 6.333333333333333;
console.log("Num is: " + num);
num = Math.floor(num);
console.log("Num is: " + num);


// EVENT LISTENERS

document.getElementById("mark").addEventListener("click",quiz);

// EVENT FUNCTIONS

function quiz(){

    let score = 0;


    if (document.getElementById("answer1").value == "Tony Stark" || document.getElementById("answer1").value == "tony stark"){
       alert("Good Work");
       score++;
       document.getElementById("answer1").style.backgroundColor="blue";
    }else{
        alert("Better Luck Next Time");
        document.getElementById("answer1").style.backgroundColor="red";
    }

    if (document.getElementById("answer2").value == "He sacrificed himself" || document.getElementById("answer2").value == "he sacrificed himself"){
        alert("Keep it up");
        score++;  
         document.getElementById("answer2").style.backgroundColor="blue";
    }else{
        alert("Maybe next time");
        document.getElementById("answer2").style.backgroundColor="red";
    }

    if (document.getElementById("answer3").value == "Nightwing" || document.getElementById("answer3").value == "nightwing"){
        alert("Good Work");
        score++; 
         document.getElementById("answer3").style.backgroundColor="blue";
    }else{
        alert("Better Luck Next Time");
        document.getElementById("answer3").style.backgroundColor="red";
    }

    if (document.getElementById("answer4").value == "Thor" || document.getElementById("answer4").value == "thor"){
        alert("Good Work");
        score++;
        document.getElementById("answer4").style.backgroundColor="blue";
     }else{
         alert("Better Luck Next Time");
         document.getElementById("answer4").style.backgroundColor="red";
     }

     alert("Your score is " + score + "/4. " + (score / 4 * 100) + "%");

     

}
