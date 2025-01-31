// Get references to the button and response elements
const askButton = document.getElementById('askButton');
const responseElement = document.getElementById('response');

// Function to generate a random "Yes" or "No" response
function getRandomResponse() {
  const randomNumber = Math.random(); // Generates a number between 0 and 1
  return randomNumber < 0.5 ? 'No' : 'Yes'; // 50/50 chance
}

// Event listener for the button click
askButton.addEventListener('click', () => {
  const response = getRandomResponse(); // Get a random response
  responseElement.textContent = response; // Display the response
});

// Accessibility: Ensure the button is focusable and can be triggered with the keyboard
askButton.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    askButton.click();
  }
});