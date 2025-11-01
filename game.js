// Track daily kick limit
let tries = localStorage.getItem("kick4cash-tries") || 0;

// Reference the football image and the canvas (optional background use)
const football = document.getElementById("football");

// Kick the football on button click
function kickBall() {
  if (tries >= 2) {
    document.getElementById("message").innerText = "You've used all your kicks today. Come back tomorrow!";
    return;
  }

  football.style.animation = "flyToGoal 1s ease-out forwards";

  // Reset animation so it can play again
  setTimeout(() => {
    football.style.animation = "";
  }, 1000);

  // Count this kick
  tries++;
  localStorage.setItem("kick4cash-tries", tries);

  // Show reward message
  const message = document.getElementById("message");
  if (tries === 1) {
    message.innerText = "Nice kick! You’ve earned $5 OFF!";
  } else if (tries === 2) {
    message.innerText = "TOUCHDOWN! You’ve earned $10 OFF!";
  }
}
