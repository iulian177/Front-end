
// API call string
const APIstring = "https://jsonplaceholder.typicode.com/posts/";

// API call count
var currentData = 0;

// Cache the DOM
const dataCountDown = document.getElementById("dataCountDown");
const dataDiv = document.getElementById("dataDiv");

// Add event handlers
dataDiv.addEventListener("click", displayData);


// Async function from importing data from the server
async function displayData() {
  
  // Disable clicks and start countdown
  dataDiv.removeEventListener("click", displayData);

  // Set countdown value
  let timer = 5;

  // Start interval timer
  let secsCounter = setInterval(() => {
    // Decrement and update timer
    timer--;
    dataCountDown.innerHTML = `New data in: ${timer}s `;

    // If timer expired
    if (timer === 0) {
      clearInterval(secsCounter);
      // Re-Add event handlers
      dataDiv.addEventListener("click", displayData);
      
    }
  }, 1000);

  // Get the next piece of data
  currentData = Math.floor(Math.random() * 100) + 1;
  let response = await fetch(`${APIstring}${currentData}`);
  let data = await response.json();

  // Display the data from the server
  this.innerHTML = `${data.id}. ${data.title} </br></br> ${data.body}`;

  //cache the random color
  var cachedRandomColor = getRandomColor();

  //change the bgColor
  this.style.backgroundColor = cachedRandomColor;
  
  //change the text font
  this.style.color = setTextColor(cachedRandomColor);
}


// Function that returns a random hexa color when called
// e.g. calling myColor = getRandomColor() will store a 
// random hexadecimal color in myColor (i.e. myColor = '#12AC56')

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    // Generate 6 random values from letters array
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    
}

function setTextColor(color) {
  if(isLight(color) == true) {
    return "black";
   }   
   else {
    return "white";
}

 }   


// Function that checks the luminosity of a hexadecimal color
// Returns true if a color is light and false if a color is dark
// e.g. isLight("#FFFFFF") returns true 
//      isLight("#000000") returns false
function isLight(color) {
    var color = color.substring(1);     // Strip #
    var rgb = parseInt(color, 16);      // Convert RRGGBB to decimal
    var red = (rgb >> 16) & 0xff;       // Extract red
    var green = (rgb >> 8) & 0xff;      // Extract green
    var blue = (rgb >> 0) & 0xff;       // Extract blue

    var luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue; // per ITU-R BT.709

    if (luminance > 128) {
        return true;        // Color is light
    }
    else {
        return false;       // Color is dark
    }
}