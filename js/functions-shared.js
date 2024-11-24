//Clothes points
function displayLatestScoreClothes() {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    let vaatteetPisteetElement = document.getElementById("vaatteetpisteet");
    if (highScores.length > 0) {
        let viimeisinPiste = highScores[highScores.length - 1];
        vaatteetPisteetElement.textContent = `${viimeisinPiste} points`;
    } else {
        vaatteetPisteetElement.textContent = "No points";
    }
}
displayLatestScoreClothes();


