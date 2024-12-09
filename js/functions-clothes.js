const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const gridSize = 20;
let snake = [{ x: 160, y: 160 }, { x: 140, y: 160 }, { x: 120, y: 160 }];
let direction = { x: 20, y: 0 };
let score = 0;
let gameLoopInterval;

// List of clothes in English
const clothingItems = [
    { name: "shirt / paita", img: "../other-img/t-shirt.png" },
    { name: "pants / housut", img: "../other-img/pants.png" },
    { name: "hat / hattu", img: "../other-img/hat.png" },
    { name: "boots / saappaat", img: "../other-img/boots.png" },
    { name: "skirt / hame", img: "../other-img/skirt.png" },
    { name: "socks / sukat", img: "../other-img/socks.png" }
];
let currentClothingIndex = -1; // Let's initialize the index so we can check the latest garment
let food = { x: 100, y: 100, item: null };

// Loading clothes pictures
const clothingImages = clothingItems.map(item => {
    const img = new Image();
    img.src = item.img;
    return img;
});

const clothingImageSize = 60;

function drawSnake() {
    snake.forEach(part => {
        ctx.fillStyle = "#3D405B";
        ctx.fillRect(part.x, part.y, gridSize, gridSize);
    });
}

function moveSnake() {
    const newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    if (newHead.x === food.x && newHead.y === food.y) {
        score += 1;
        document.getElementById("score").textContent = score;
        document.getElementById("currentClothing").textContent = food.item.name;
        nextClothing();
    } else {
        snake.pop();
    }

    snake.unshift(newHead);
    if (checkCollision()) {
        endGame();
    }
}

function placeFood() {
    let newFoodPosition;

    do {
        newFoodPosition = {
            x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
            y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
        };
    } while (isFoodOnSnake(newFoodPosition)); // Check if the food point is on the worm

    // We make sure that the same food does not come in a row
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * clothingItems.length);
    } while (newIndex === currentClothingIndex); // Make sure the new index is not the same as the previous one

    food.x = newFoodPosition.x;
    food.y = newFoodPosition.y;
    food.item = clothingItems[newIndex];
    currentClothingIndex = newIndex; // Update the current clothing index
}

function isFoodOnSnake(position) {
    return snake.some(part => part.x === position.x && part.y === position.y);
}


function drawFood() {
    // Let's draw a picture of clothes as food
    const img = clothingImages[currentClothingIndex];
    ctx.drawImage(img, food.x, food.y, gridSize, gridSize);
}

function drawClothingItems() {
    const clothingList = document.getElementById("clothingList");
    clothingList.innerHTML = ""; // Let's clear the list before adding new pictures

    clothingItems.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "clothing-item";

        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.name;

        const nameSpan = document.createElement("span");
        nameSpan.textContent = item.name;

        itemDiv.appendChild(img);
        itemDiv.appendChild(nameSpan);
        clothingList.appendChild(itemDiv);
    });
}

function nextClothing() {
    placeFood();
}

function checkCollision() {
    const head = snake[0];

    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        return true;
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }

    return false;
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    moveSnake();
    drawSnake();
    drawFood();
    drawClothingItems();
}

function endGame() {
    clearInterval(gameLoopInterval);
    alert("Peli ohi! Pisteesi: " + score);
    saveScore(score);
}

function saveScore(score) {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push(score);
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function restartGame() {
    const button = document.querySelector(".custom-button");
    button.style.fontSize = "";
    button.style.fontWeight ="";
    snake = [{ x: 160, y: 160 }, { x: 140, y: 160 }, { x: 120, y: 160 }];
    direction = { x: 20, y: 0 };
    score = 0;
    currentClothingIndex = -1;
    document.getElementById("score").textContent = score;
    document.getElementById("currentClothing").textContent = "";
    placeFood();
    clearInterval(gameLoopInterval);
    gameLoopInterval = setInterval(gameLoop, 100);
}

// Keyboard listener
window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            if (direction.y === 0) direction = { x: 0, y: -20 };
            break;
        case "ArrowDown":
            if (direction.y === 0) direction = { x: 0, y: 20 };
            break;
        case "ArrowLeft":
            if (direction.x === 0) direction = { x: -20, y: 0 };
            break;
        case "ArrowRight":
            if (direction.x === 0) direction = { x: 20, y: 0 };
            break;
    }
});

// Adding touch support
window.addEventListener("touchstart", function (event) {
    if (event.touches.length === 1) {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
    }
});

window.addEventListener("touchend", function (event) {
    if (event.changedTouches.length === 1) {
        const touchEndX = event.changedTouches[0].clientX;
        const touchEndY = event.changedTouches[0].clientY;

        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal movement
            if (deltaX > 0 && direction.x === 0) {
                direction = { x: 20, y: 0 }; // Right
            } else if (deltaX < 0 && direction.x === 0) {
                direction = { x: -20, y: 0 }; // Left
            }
        } else {
            // Vertical movement
            if (deltaY > 0 && direction.y === 0) {
                direction = { x: 0, y: 20 }; // Down
            } else if (deltaY < 0 && direction.y === 0) {
                direction = { x: 0, y: -20 }; // Up
            }
        }
    }
});
restartGame();
