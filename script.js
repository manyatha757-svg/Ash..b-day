let currentPage = 1;

function nextPage() {
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.add("active");
}

const player = document.querySelector(".player");
let x = 5;
let y = 5;
const step = 10;

document.addEventListener("keydown", (e) => {
  if (!document.getElementById("page2").classList.contains("active")) return;

  if (e.key === "ArrowUp") y -= step;
  if (e.key === "ArrowDown") y += step;
  if (e.key === "ArrowLeft") x -= step;
  if (e.key === "ArrowRight") x += step;

  x = Math.max(0, Math.min(210, x));
  y = Math.max(0, Math.min(210, y));

  player.style.left = x + "px";
  player.style.top = y + "px";

 if (x > 190 && y > 190) {
  launchConfetti();
  setTimeout(() => {
    alert("🎉 SURPRISEEE! Happy Birthday Ashweeeeen 💕");
  }, 300);
}

  }
                          function launchConfetti() {
  const container = document.getElementById("confetti-container");
  const colors = ["#ff4d6d", "#ffd166", "#cdb4db", "#a2d2ff", "#ffc8dd"];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = 2 + Math.random() * 1.5 + "s";

    container.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}
function showCertificate() {
  document.getElementById("certificatePage").classList.remove("hidden");
  startConfetti();
}
// when maze is completed
showCertificate();

});
