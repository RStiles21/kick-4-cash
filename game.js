
let tries = localStorage.getItem('kick4cash-tries') || 0;
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
let ballX = 200;
let ballY = 180;

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#D2691E";
  ctx.fill();
  ctx.closePath();
}

function kickBall() {
  if (tries >= 2) {
    document.getElementById("gameMsg").innerText = "You've used all your kicks today. Come back tomorrow!";
    return;
  }

  let success = Math.random() > (tries === 0 ? 0 : 0.5);
  let reward = tries === 0 ? "$5 OFF – KICK5" : "$10 OFF – KICK10";
  let msg = success ? `TOUCHDOWN SAVINGS! You scored ${reward}` : "Oof! Just missed. Come back tomorrow.";

  document.getElementById("gameMsg").innerText = msg;

  if (success) {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    document.getElementById("rewardArea").innerHTML = `
      <p style="font-size: 16px; margin-top: 10px;">Copy your code: <strong>${tries === 0 ? 'KICK5' : 'KICK10'}</strong></p>
      <a href="#locker-room" style="display: inline-block; margin-top: 10px; background: #FFD700; color: #000; padding: 8px 16px; border-radius: 6px; text-decoration: none;">Enter Locker Room</a>
    `;
  }

  tries++;
  localStorage.setItem('kick4cash-tries', tries);
}

drawBall();
