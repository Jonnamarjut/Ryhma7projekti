const colors = {
  "red+yellow": "orange",
  "red+blue": "purple",
  "yellow+blue": "green",
  "red+green": "brown",
  "blue+green": "teal",
  "yellow+purple": "brown",
  "red+orange": "vermilion",
  "yellow+orange": "gold",
  "blue+purple": "indigo",
  "purple+green": "slate",
  "orange+green": "olive",
  "yellow+green": "lime",
  "purple+purple": "purple",
  "red+red": "red",
  "yellow+yellow": "yellow",
  "blue+blue": "blue",
  "green+green": "green",
  "orange+orange": "orange",
  "purple+orange": "burnt sienna",
  "yellow+teal": "spring green",
  "blue+orange": "brown"
};

let selectedColors = [];
let mixedColor = "";
let score = 0;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("color", event.target.dataset.color);
}

function drop(event) {
  event.preventDefault();
  const color = event.dataTransfer.getData("color");

  if (selectedColors.length < 2) {
    selectedColors.push(color);
  }

  if (selectedColors.length === 2) {
    const sortedColors = selectedColors.slice().sort().join("+");
    mixedColor = colors[sortedColors] || "grey";

    document.getElementById("mixed-color").style.backgroundColor = mixedColor;
    // Poistetaan värin nimen näyttö: document.getElementById("mixed-color").textContent = mixedColor;
    selectedColors = [];
  }
}

function checkGuess() {
  const playerGuess = document.getElementById("color-guess").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");

  if (!playerGuess) {
    feedback.textContent = "Please enter a guess!";
    return;
  }

  if (playerGuess === mixedColor) {
    score++;
    feedback.textContent = "Correct! You earned a point!";
  } else {
    feedback.textContent = "Incorrect, try again!";
  }

  document.getElementById("score").textContent = score;
  document.getElementById("color-guess").value = "";
}

// Lisätään drag-funktio jokaiseen värielementtiin
document.querySelectorAll(".color").forEach(element => {
  element.ondragstart = drag;
});