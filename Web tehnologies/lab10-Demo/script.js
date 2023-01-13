// API call string
const APIstring = "https://jsonplaceholder.typicode.com/comments/";

// API call count
var currentData = 0;

// Cache the DOM
const timeoutPara = document.querySelector("p");
const divs = document.querySelectorAll("div");

// Add event handlers
divs.forEach((item) => item.addEventListener("click", displayData));

// Async function from importing data from the server
async function displayData() {
  // Display "Waiting for data"
  this.innerHTML = "Waiting for data";

  // Disable clicks and start countdown
  divs.forEach((item) => item.removeEventListener("click", displayData));
  // Set countdown value
  let timer = 5;
  timeoutPara.innerHTML = `Disabled for ${timer} seconds!`;
  // Update timer paragraph style
  timeoutPara.classList.add("p-disabled");
  // Start interval timer
  let secsCounter = setInterval(() => {
    // Decrement and update timer
    timer--;
    timeoutPara.innerHTML = `Disabled for ${timer} seconds!`;

    // If timer expired
    if (timer === 0) {
      clearInterval(secsCounter);
      // Re-Add event handlers
      divs.forEach((item) => item.addEventListener("click", displayData));
      // Remove timer paragraph styling and update text
      timeoutPara.innerHTML = "Form enabled!";
      timeoutPara.classList.remove("p-disabled");
    }
  }, 1000);

  // Get the next piece of data
  currentData++;
  let response = await fetch(`${APIstring}${currentData}`);
  let data = await response.json();

  // Display the data from the server
  this.innerHTML = `${data.id}. ${data.body}`;
}
