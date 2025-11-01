
function kickBall() {
  if (tries >= 2) {
    document.getElementById("gameMsg").innerText =
      "You've used all your kicks today. Come back tomorrow!";
    return;
  }

  let success = Math.random() > (tries === 0 ? 0 : 0.5);
  let reward = tries === 0 ? "$5 OFF – KICK5" : "$10 OFF – KICK10";
  let msg = success
    ? `🏈 TOUCHDOWN! You scored ${reward}`
    : "Oof! Just missed. Come back tomorrow.";

  document.getElementById("gameMsg").innerText = msg;

  if (success) {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });

    const couponCode = reward.includes("KICK5") ? "KICK5" : "KICK10";

    let rewardHTML = `
      <p style="font-size: 16px; margin-top: 10px;">
        Copy your code: <strong>${couponCode}</strong>
      </p>
    `;

    if (tries === 1) {
      rewardHTML += `
        <a href="#locker-room"
           style="display: inline-block;
                  margin-top: 10px;
                  background: #FD7D0D;
                  color: #000;
                  padding: 8px 16px;
                  border-radius: 6px;
                  text-decoration: none;">
          Enter Locker Room
        </a>
      `;
    }

    document.getElementById("rewardArea").innerHTML = rewardHTML;
  }

  tries++;
  localStorage.setItem('kick4cash-tries', tries);
}
