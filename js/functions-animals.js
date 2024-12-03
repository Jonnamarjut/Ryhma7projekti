const listOfImages = [
    'bear.png', 'cat.png', 'cow.png', 'dog.png', 'duck.png', 'hamster.png', 'horse.png', 'owl.png', 'rabbit.png', 'bear.png', 'cat.png', 'cow.png', 'dog.png', 'duck.png', 'hamster.png', 'horse.png', 'owl.png', 'rabbit.png'
]

const containerOfCards = document.querySelector('.gamecontainer')

let chosenCards = []
let listOfMatchedPairs = []
let totalScores = 9
let matchedPairs = 0
localStorage.setItem('animals', '0')

// Prepare a set of playcards.

function createSetOfCards() {
    listOfImages.forEach((cardImage, index) => {
        const elementOfCard = document.createElement('div')
        elementOfCard.classList.add('card')
    
        const contentOfCard = document.createElement('div')
        contentOfCard.classList.add('cardContent')

        const frontPage = document.createElement('div')
        frontPage.classList.add('frontView')
        const frontImage = document.createElement('img')
        frontImage.src = "../other-img/"+ cardImage
        frontPage.appendChild(frontImage)

        const backSideOfCard = document.createElement('div')
        backSideOfCard.classList.add('backView')

        contentOfCard.appendChild(frontPage)
        contentOfCard.appendChild(backSideOfCard)
        elementOfCard.appendChild(contentOfCard)
        containerOfCards.appendChild(elementOfCard)

        elementOfCard.addEventListener('click', () => flipCard(elementOfCard))
    })
}

// Set style transformation for card flipping and when two cards were chosen the function of CheckMatch() will be activated.

function flipCard(elementOfCard) {

    elementOfCard.querySelector('.cardContent').style.transform = 'rotateY(180deg)';
    elementOfCard.querySelector('.frontView').style.transform = 'rotateY(180deg)';


    if(listOfMatchedPairs.includes(elementOfCard) || chosenCards.includes(elementOfCard)) {
        return
    }
    chosenCards.push(elementOfCard)

    if(chosenCards.length === 2) {
        checkMatch()
    }
}


// The aim of the function of checkMatch is to check if those chosen cards are identical or not.

function checkMatch() {

    const theFirstOne = chosenCards[0]
    const theSecondOne = chosenCards[1]
    const firstImage = theFirstOne.querySelector('.frontView img').src
    const secondImage = theSecondOne.querySelector('.frontView img').src

    if (firstImage === secondImage) {
        listOfMatchedPairs.push(theFirstOne)
        listOfMatchedPairs.push(theSecondOne)
        matchedPairs++
        document.querySelector('output').innerHTML = matchedPairs
        localStorage.setItem('animals', matchedPairs);
        chosenCards = []
    } else { 
        setTimeout(() => {
            for(card of chosenCards) {
                card.querySelector('.cardContent').style.transform = 'rotateY(0deg)';
                card.querySelector('.frontView').style.transform = 'rotateY(0deg)';
            }
            chosenCards = []
        }, 800);
    }


    if (matchedPairs === totalScores) {
        alert("Awesome! You've collected nine points from this exercise. Go to the next exercise to earn more! ")
    }
}

createSetOfCards()