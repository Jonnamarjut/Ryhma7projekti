document.addEventListener('DOMContentLoaded', () => {
  let breathCount = 0;

  const circle = document.getElementById('circle');
  const breathCounter = document.getElementById('breath-count');
  const message = document.getElementById('message');

  // laskee hengityksiä
  function trackBreaths() {
      breathCount++;
      breathCounter.textContent = breathCount;

      // Kun hengityksiä = 5, näytetään ensimmäinen tsemppiviesti
      if (breathCount === 5) {
          message.textContent = "Good job! Keep breathing!";
          message.style.color = "#4caf50"; // väri tekstille
      }

      // Kun hengityksiä = 7, näytetään tsemppiviesti
      if (breathCount === 7) {
          message.textContent = "Wow! You're the calm mind.";
          message.style.color = "#4caf50"; // väri tekstille
      }

      // Kun hengityksiä = 10, näytetään tsemppiviesti
      if (breathCount === 10) {
          message.textContent = "You're doing amazing! Keep it up!";
          message.style.color = "#ff9800"; // väri tekstille
      }
  }

  // tapahtumakuuntelija 
  circle.addEventListener('animationiteration', trackBreaths);
});
