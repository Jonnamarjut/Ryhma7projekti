document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container img')
    const adjectiveContainer = document.querySelector('.adjective-container')
    const messageElement = document.getElementById('message')
    const nextImageButton = document.getElementById('next-image')
    const scoreElement = document.getElementById('score')

    // Data eri kuvista ja adjektiiveista
    const data = [
        { image: '../other-img/happy.jpg', correct: 'happy', adjectives: ['Happy', 'Angry', 'Tired'] },
        { image: '../other-img/sad.jpg', correct: 'sad', adjectives: ['Joyfull', 'Sad', 'Sick'] },
        { image: '../other-img/small.jpg', correct: 'small', adjectives: ['Big', 'Small', 'Strong'] },
        { image: '../other-img/hard.jpg', correct: 'hard', adjectives: ['Hard', 'Soft', 'Angry'] },
        { image: '../other-img/dirty.jpg', correct: 'dirty', adjectives: ['Clean', 'Dirty', 'Small'] },
        { image: '../other-img/angry.jpg', correct: 'angry', adjectives: ['Weak', 'Funny', 'Angry'] },
        { image: '../other-img/big.jpg', correct: 'big', adjectives: ['Big', 'Small', 'Hard'] },
        { image: '../other-img/strong.jpg', correct: 'strong', adjectives: ['Strong', 'Happy', 'Weak'] },
        { image: '../other-img/tired.jpg', correct: 'tired', adjectives: ['Awake', 'Big', 'Tired'] },
        { image: '../other-img/sick.jpg', correct: 'sick', adjectives: ['Tired', 'Sick', 'Healthy'] },

    ];

    let currentIndex = 0
    let score = 0

    function updateScore() {
        scoreElement.value = score
    }

    // Lataa ensimmäinen kuva
    loadImage(data[currentIndex])
    updateScore()

    // Mahdollistaa adjektiivien vetämisen
    function enableDragAndDrop() {
        const adjectives = document.querySelectorAll('.adjective')
        adjectives.forEach(adjective => {
            adjective.addEventListener('dragstart', dragStart)
        });
        imageContainer.addEventListener('dragover', event => event.preventDefault())
        imageContainer.addEventListener('drop', handleDrop)
    }

    function dragStart(event) {
        event.dataTransfer.setData('text', event.target.id)
    }

    function handleDrop(event) {
        event.preventDefault();
        const adjectiveId = event.dataTransfer.getData('text')
        const correctAnswer = data[currentIndex].correct
        
        const rightMessages = [
            'Well done!',
            'Good job!',
            'Correct!',
            'Nice one!'
        ]
        
        const wrongMessages = [
            'Try again!',
            'Not quite, try again!',
            "That's wrong, give it another shot!",
            'Oops! Not correct'
        ]

        if (adjectiveId === correctAnswer) {
            if (imageContainer.classList.contains('answered')) {
                messageElement.textContent = 'Go to the next one'
                return
            }
            
            const randomIndex = Math.floor(Math.random() * rightMessages.length)
            messageElement.textContent = rightMessages[randomIndex]
            score++
            updateScore()
            nextImageButton.style.display = 'block'
            imageContainer.classList.add('answered')
        } else {
            const randomIndex = Math.floor(Math.random() * wrongMessages.length)
            messageElement.textContent = wrongMessages[randomIndex]
        }
    }

    // Nappia painamalla lataa seuraava kuva
    nextImageButton.addEventListener('click', function () {
        currentIndex++
        if (currentIndex < data.length) {
            loadImage(data[currentIndex])
            messageElement.textContent = ''
            nextImageButton.style.display = 'none'
        } else {
            messageElement.textContent = 'Congratulations! You completed the game!'
            nextImageButton.style.display = 'none'
        }
    });

    // Lataa kuva ja adjektiivit
    function loadImage(item) {
        imageContainer.src = item.image
        imageContainer.alt = 'A drawn picture of an animal that is ${item.correct}'
        adjectiveContainer.innerHTML = ''
        item.adjectives.forEach(adjective => {
            const div = document.createElement('div')
            div.id = adjective.toLowerCase()
            div.className = 'adjective'
            div.textContent = adjective
            div.draggable = true
            adjectiveContainer.appendChild(div)
        });
        enableDragAndDrop()

        imageContainer.classList.remove('answered')
    }
});
