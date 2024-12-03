document.addEventListener('DOMContentLoaded', () => {
  let breathCount = 0;
  let score = 0;

  const circle = document.getElementById('circle');
  const breathCounter = document.getElementById('breath-count');
  const message = document.getElementById('message');

  // laskee hengityksiä
  function trackBreaths() {
      breathCount++;
      score++;
      breathCounter.textContent = breathCount;
      
      // pisteet
      const scoreDisplay = document.getElementById('score');
      if (scoreDisplay) {
          scoreDisplay.textContent = 'Points: ' + score;
      }

      // hengityksiä = 2, tsemppiviesti
      if (breathCount === 2) {
        message.textContent = "Yes! Keep breathing!";
        message.style.color = "#4caf50"; // väri tekstille
    }
    
    // hengityksiä = 5, tsemppiviesti
      if (breathCount === 5) {
          message.textContent = "Good job! Keep breathing!";
          message.style.color = "#4caf50"; // väri tekstille
      }

      // hengityksiä = 7, tsemppiviesti
      if (breathCount === 7) {
          message.textContent = "Wow! You're the calm mind.";
          message.style.color = "#4caf50"; // väri tekstille
      }

      // hengityksiä = 10,  tsemppiviesti
      if (breathCount === 10) {
          message.textContent = "You're doing amazing! Keep it up!";
          message.style.color = "#ff9800"; // väri tekstille
      }
  }

  // tapahtumakuuntelija animaation valmistumiseen
  circle.addEventListener('animationiteration', trackBreaths);
});
