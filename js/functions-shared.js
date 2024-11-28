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

//Clothes points

const scoresOfClothes = localStorage.getItem('')
document.getElementById('vaatteetpisteet').innerHTML = scoresOfClothes


//Animals points

const scoresOfAnimals = localStorage.getItem('animals')
document.getElementById('elaimetpisteet').innerHTML = scoresOfAnimals

//Colours points

const scoresOfColours = localStorage.getItem('')
document.getElementById('varitpisteet').innerHTML = scoresOfColours


//Adjectives points

const scoresOfAdjectives = localStorage.getItem('')
document.getElementById('adjektiivitpisteet').innerHTML = scoresOfAdjectives


//Relaxing points

const scoresOfRelaxing = localStorage.getItem('')
document.getElementById('rentoutuminenpisteet').innerHTML = scoresOfRelaxing


// Exercising points

const scoresOfExercising = localStorage.getItem('')
document.getElementById('liikuntapisteet').innerHTML = scoresOfExercising


//Total score

let score = parseInt(localStorage.getItem('animals'))

//  score += parseInt(localStorage.getItem(''))
//  score += parseInt(localStorage.getItem(''))
//  score += parseInt(localStorage.getItem(''))
//  score += parseInt(localStorage.getItem(''))
//  score += parseInt(localStorage.getItem(''))

document.getElementById('allscores').innerHTML = score
