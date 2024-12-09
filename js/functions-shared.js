//Clothes points
function displayLatestScoreClothes() {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    let vaatteetPisteetElement = document.getElementById("vaatteetpisteet");
    if (highScores.length > 0) {
        let viimeisinPiste = highScores[highScores.length - 1];
        vaatteetPisteetElement.textContent = `${viimeisinPiste}`;
    } else {
        vaatteetPisteetElement.textContent = "";
    }
}
displayLatestScoreClothes();
// Search and add animals points
let score = parseInt(localStorage.getItem('animals')) || 0; // add zero if no value

// Search and add clothes points 
function getClothesPoints() {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    if (highScores.length > 0) {
        return highScores[highScores.length - 1];
    }
    return 0; 
}
// Add clothes points to the total score
score += getClothesPoints ();

//Animals points

const scoresOfAnimals = localStorage.getItem('animals')
document.getElementById('elaimetpisteet').innerHTML = scoresOfAnimals

//Colours points

const scoresOfColours = localStorage.getItem('color')
document.getElementById('varitpisteet').innerHTML = scoresOfColours


//Adjectives points

const scoresOfAdjectives = localStorage.getItem('adjectives')
document.getElementById('adjektiivitpisteet').innerHTML = scoresOfAdjectives


// Mindfulness points
const scoresOfRelaxing = localStorage.getItem('breathingPoints');
document.getElementById('rentoutuminenpisteet').innerHTML = scoresOfRelaxing;


// Move points

const scoresOfExercising = localStorage.getItem('move')
document.getElementById('liikuntapisteet').innerHTML = scoresOfExercising


//Total score

    score += parseInt(localStorage.getItem('move'))

    score += parseInt(localStorage.getItem('breathingPoints'))
    score += parseInt(localStorage.getItem('color'))
    score += parseInt(localStorage.getItem('adjectives'))

document.getElementById('allscores').innerHTML = score || 0 // add zero if no value
