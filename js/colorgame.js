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
  console.log("Dragged color:", event.target.dataset.color);
  event.dataTransfer.setData("color", event.target.dataset.color);
}

function drop(event) {
  event.preventDefault();
  const color = event.dataTransfer.getData("color");
  console.log("Dropped color:", color);

  if (selectedColors.length < 2 && !selectedColors.includes(color)) {
    selectedColors.push(color);
  }

  console.log("Selected colors:", selectedColors);

  if (selectedColors.length === 2) {
    const sortedColors = selectedColors.slice().sort().join("+");
    console.log("Combined colors:", sortedColors);
    mixedColor = colors[sortedColors] || "grey";

    document.getElementById("mixed-color").style.backgroundColor = mixedColor;
    document.getElementById("mixed-color").textContent = mixedColor; // Värin nimi näkyy

    selectedColors = []; // Tyhjentää taulukon sekoituksen jälkeen
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

// Lisätään drag-funktio jokaiseen värielementtiin
document.querySelectorAll(".color").forEach(element => {
  element.ondragstart = drag;
});
