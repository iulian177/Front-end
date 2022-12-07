"use strict";

var d = new Date();
function dispTime() {

    // Date este o clasa predefinita
    //d.getHours() este o metoda a acestei clase
    // new Date() contruieste 1 obiect al clasei Date
    
    
    //take the integer hours from date object
    //convert it to string and then display the string with the 0 in front, if necessary
    //const hours = d.getHours().toString();

    document.getElementById("resultDiv").innerHTML = 
    "The time is: " + d.getHours().toString().padStart(2, '0') + ":" + d.getMinutes().toString().padStart(2, '0') + 
    ":" + d.getSeconds().toString().padStart(2, '0') ;
};
document.getElementById("my-button").addEventListener("click", dispTime);

//////

//display hover the text, the day of the week

function disphover1() {
    var dayOfWeek = d.getDay();
    var stringDay;
    switch (dayOfWeek) {
        case 0:
            stringDay = "Sunday";
            break;
        case 1:
            stringDay = "Monday";
            break;
        case 2:
            stringDay = "Tuesday";
            break;
        case 3:
            stringDay = "Wednesday";
            break;
        case 4:
            stringDay = "Thursday";
            break;
        case 5:
            stringDay = "Friday";
            break;
        case 6:
            stringDay = "Saturday";
            break;
        default:
            stringDay = "Invalid";
            break;    
    }
    document.getElementById("resultDiv").innerHTML = "Today is " + stringDay;
}

function disphover2() {
    document.getElementById("resultDiv").innerHTML = "Have a nice day";
}

document.getElementById("hover").addEventListener("mouseover", disphover1) ;
document.getElementById("hover").addEventListener("mouseout", disphover2) ;

/////

let count = 0;
function doubleClick() {
    
    count += 1;
    document.getElementById("resultDiv").innerHTML = "“I have been double-clicked " + count + " times";
}

document.getElementById("double-click").addEventListener("dblclick", doubleClick);

/////
//calculate the sum of the first n numbers

function sumNr() {
  var sum = 0;
  var i;
  var input = document.getElementById("sumNum").value;
  for(i=1; i<=input; i++) {
     sum += i;
  }
  document.getElementById("resultDiv").innerHTML = "The sum is: " + sum;
}

document.getElementById("calculate").addEventListener("click", sumNr);

