//Clothes points
function displayLatestScoreClothes() {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    let vaatteetPisteetElement = document.getElementById("vaatteetpisteet");
    if (highScores.length > 0) {
        let viimeisinPiste = highScores[highScores.length - 1];
        vaatteetPisteetElement.textContent = `${viimeisinPiste}`;
    } else {
        vaatteetPisteetElement.textContent = "No points";
    }
}
displayLatestScoreClothes();

//Animals points

const scoresOfAnimals = localStorage.getItem('animals')
document.getElementById('elaimetpisteet').innerHTML = scoresOfAnimals

//Colours points

const scoresOfColours = localStorage.getItem('')
document.getElementById('varitpisteet').innerHTML = scoresOfColours


//Adjectives points

const scoresOfAdjectives = localStorage.getItem('')
document.getElementById('adjektiivitpisteet').innerHTML = scoresOfAdjectives


// Mindfulness points
const scoresOfRelaxing = localStorage.getItem('breathingPoints') || 0;
document.getElementById('rentoutuminenpisteet').innerHTML = "Pisteet: " + scoresOfRelaxing;


// Exercising points

const scoresOfExercising = localStorage.getItem('')
document.getElementById('liikuntapisteet').innerHTML = scoresOfExercising


//Total score

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



//  score += parseInt(localStorage.getItem(''))
//  score += parseInt(localStorage.getItem(''))
//  score += parseInt(localStorage.getItem(''))
//  score += parseInt(localStorage.getItem(''))

document.getElementById('allscores').innerHTML = score
