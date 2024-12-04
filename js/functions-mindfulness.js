// functions-mindfulness.js
let breathCount = 0;

const circle = document.getElementById('circle');
const breathCounter = document.getElementById('breath-count');
const message = document.getElementById('message');

// Funktio laskee hengityksiä
function trackBreaths() {
  breathCount++;
  breathCounter.textContent = breathCount;

  // Tallennetaan pisteet localStorageen
  localStorage.setItem('breathingPoints', breathCount);

  // Tsemppiviestit hengitysten mukaan
  if (breathCount === 5) {
    message.textContent = "Good job! Keep breathing!";
    message.style.color = "#4caf50";
  } else if (breathCount === 7) {
    message.textContent = "Wow! You're the calm mind.";
    message.style.color = "#4caf50";
  } else if (breathCount === 10) {
    message.textContent = "You're doing amazing! Keep it up!";
    message.style.color = "#ff9800";
  }
}

// Liitetään animaation toistoon tapahtumankuuntelija
circle.addEventListener('animationiteration', trackBreaths);
