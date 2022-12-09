
//////

var x = document.getElementsByTagName("h1");

for(var i=0; i<x.length; i++) {
  x[i].addEventListener("click", myFunction);
}   

//deschide fereastra de quote
// "opened" si "showAnswer" sunt clase predef care coloreaza/ascunde text
function myFunction() {
  this.classList.toggle("opened");
    
    this.nextElementSibling.classList.toggle("showAnswer");
}

///


window.document.body.style.backgroundColor = "lightblue";
// html colection - like an array
console.log(document.getElementsByTagName("h1").length);

console.log(window.innerHeight );
console.log(screen.pixelDepth );
window.open();
setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

document.cookie = "username=John Doe";
