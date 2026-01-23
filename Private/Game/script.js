                                                                    // CONSTANT VALUES WITH GAME SETTINGS


const arena = document.querySelector('.playground-section');               // The main game area
const maxWidth = arena.clientWidth; // Get the width of the playground section
const maxHeight = arena.clientHeight;   // Get the height of the playground section
const target = document.getElementById('target');                     // The button to be clicked
var arenaWidth = arena.offsetWidth - target.offsetWidth;  // Width of the arena minus the button width
var arenaHeight = arena.offsetHeight - target.offsetHeight;   // Height of the arena minus the button height 


                                                                    // RANDOM POSITION GENERATOR FOR THE BUTTON

const randomX = Math.random() * arenaWidth;  // Generate a random X position within the arena
const randomY = Math.random() * arenaHeight; // Generate a random Y position within the arena

                                                                    // SET THE BUTTON'S POSITION TO THE RANDOM COORDINATES

// target.style.left = randomX + 'px';               // Set the button's left position
// target.style.top = randomY + 'px';                // Set the button's top position
console.log("Button position set to: (" + randomX + ", " + randomY + ")"); // Log the button's position for debugging




                                                                    // RANDOMLY POSITION THE BUTTON EVERY 1 SECOND
const moveTarget = () => {
    const randomX = Math.random() * arenaWidth;  // Generate a new random X position
    const randomY = Math.random() * arenaHeight; // Generate a new random Y position
    target.style.left = randomX + 'px';               // Update the button's left position
    target.style.top = randomY + 'px';                // Update the button's top position
    console.log("Button moved to: (" + randomX + ", " + randomY + ")"); // Log the new button position
};



                                                                    // ADDING LOGIC FOR GAME
let score = 0; // Initialize score variable
let gameStarted = false; // Flag to track if the game has started
let intervalId = null; // Variable to hold the interval ID
canScore = true; // Flag to control scoring
let timeLeft = 30; // Game duration in seconds
let timerId;
let canClick = true; // Flag to control clickability
let restart = document.querySelector('.restart'); // Restart button
restart.addEventListener('click', () => {
    location.reload(); // Reload the page to restart the game
});
let gameOver = () => {
    clearInterval(timerId);
    clearInterval(intervalId);
    alert("Game Over! Your score: " + score);
    
} // Function to handle game over


                                                                    // EVENT LISTENER FOR BUTTON CLICK AND GAME LOOP
                                                                    

target.addEventListener('click', () => {
    if (!gameStarted){
        gameStarted = true;
        intervalId = setInterval(moveTarget, 1000); // Move the button every second
        
        timerId = setInterval(() => { // Variable to hold the timer ID
        timeLeft--;
        document.getElementById('time').textContent = `Time: ${timeLeft}`; // Update the time display
        if (timeLeft === 0) gameOver();
        }, 1000); // Decrease time every second
    }
        if (canScore) {
            canScore = false; // Disable clicking temporarily
          score++; // Increment score
          document.getElementById('score').textContent = `Score: ${score}`;
          setTimeout(() => {
            canScore = true; }, 900);}     // Re-enable clicking after 500ms
    }
    
);
