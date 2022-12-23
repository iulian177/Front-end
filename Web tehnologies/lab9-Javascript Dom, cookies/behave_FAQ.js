
//////
window.document.body.style.backgroundColor = "lightblue";

//cache the Doom
bgColorInput = document.getElementById("bgcolor");
var x = document.getElementsByTagName("h1");
grade = document.getElementById("grade");

for(var i=0; i<x.length; i++) {
  x[i].addEventListener("click", myFunction);
}   

//deschide fereastra de quote
// "opened" si "showAnswer" sunt clase predef care coloreaza/ascunde text
function myFunction() {
  this.classList.toggle("opened");
    
    this.nextElementSibling.classList.toggle("showAnswer");
}

////

function setCookie(cName, cValue, valDays) {
  let crtDate = new Date();
  crtDate.setTime(crtDate.getTime() + (valDays * 24 * 60 * 60 * 1000));
  var exp = "expires=" + crtDate.toUTCString();
  document.cookie = cName + "=" + cValue + ";" + exp + ";path=/";
  }
  
function getCookie(cName) {
  var name = cName + "=";
  var cArray = document.cookie.split(";");

  var cArrayLength = cArray.length;

  for (let i = 0; i < cArrayLength; i++) {
       let crtCookie = cArray[i];
       while (crtCookie.charAt(0) == ' ') {
           crtCookie = crtCookie.substring(1);
      }
      if (crtCookie.indexOf(name) == 0) {
              return crtCookie.substring(name.length, crtCookie.length);
      }
  }
  return "";
}

////
//set the bg color based of the input
bgColorInput.addEventListener("change", SetBgCookie);

function SetBgCookie() {
  let SelectedColor = this.value;  
  document.body.style.backgroundColor = SelectedColor;
  // the cookie remains stored for 1 year
  setCookie("bgColor", SelectedColor, 365);
}

///

window.onload = setBgColorOnLoad;
    
function setBgColorOnLoad() {
   
    let bgColor = getCookie("bgColor");
    document.body.style.backgroundColor = bgColor;
    //we also set the input the same color as the bg
    document.getElementById("bgcolor").value = bgColor;
}

///

grade.addEventListener("change", validateGrade);

function validateGrade(value) {
 if(this.value == 10) {
  grade.classList = "valid-grade";
 }
 else {
  grade.classList = "invalid-grade";
 }
}

/////


 //grade.classList.add("valid-grade");
// hypertext.classname

// html colection - like an array
//console.log(document.getElementsByTagName("h1").length);

//console.log(window.innerHeight );
//console.log(screen.pixelDepth );
