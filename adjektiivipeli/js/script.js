document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container img');
    const adjectiveContainer = document.querySelector('.adjective-container');
    const messageElement = document.getElementById('message');
    const nextImageButton = document.getElementById('next-image');

    // Data eri kuvista ja adjektiiveista
    const data = [
        { image: './pictures/happy.jpg', correct: 'happy', adjectives: ['Happy', 'Angry'] },
        { image: './pictures/sad.jpg', correct: 'sad', adjectives: ['Joyfull', 'Sad'] },
        { image: './pictures/small.jpg', correct: 'small', adjectives: ['Big', 'Small'] },
        { image: './pictures/hard.jpg', correct: 'hard', adjectives: ['Hard', 'Soft'] },
        { image: './pictures/dirty.jpg', correct: 'dirty', adjectives: ['Clean', 'Dirty'] },
        { image: './pictures/angry.jpg', correct: 'angry', adjectives: ['Funny', 'Angry'] },
        { image: './pictures/big.jpg', correct: 'big', adjectives: ['Big', 'Small'] },
        { image: './pictures/strong.jpg', correct: 'strong', adjectives: ['Strong', 'Weak'] },
        { image: './pictures/tired.jpg', correct: 'tired', adjectives: ['Awake', 'Tired'] },
        { image: './pictures/sick.jpg', correct: 'sick', adjectives: ['Sick', 'Healthy'] },

    ];

    let currentIndex = 0;

    // Lataa ensimmäinen kuva
    loadImage(data[currentIndex]);

    // Mahdollistaa adjektiivien vetämisen
    function enableDragAndDrop() {
        const adjectives = document.querySelectorAll('.adjective');
        adjectives.forEach(adjective => {
            adjective.addEventListener('dragstart', dragStart);
        });
        imageContainer.addEventListener('dragover', event => event.preventDefault());
        imageContainer.addEventListener('drop', handleDrop);
    }

    function dragStart(event) {
        event.dataTransfer.setData('text', event.target.id);
    }

    function handleDrop(event) {
        event.preventDefault();
        const adjectiveId = event.dataTransfer.getData('text');
        const correctAnswer = data[currentIndex].correct;

        if (adjectiveId === correctAnswer) {
            messageElement.textContent = 'Correct! Great job!';
            nextImageButton.style.display = 'block';
        } else {
            messageElement.textContent = 'Try again!';
        }
    }

    // Nappia painamalla lataa seuraava kuva
    nextImageButton.addEventListener('click', function () {
        currentIndex++;
        if (currentIndex < data.length) {
            loadImage(data[currentIndex]);
            messageElement.textContent = '';
            nextImageButton.style.display = 'none';
        } else {
            messageElement.textContent = 'You completed the game! 🎉';
            nextImageButton.style.display = 'none';
        }
    });

    // Lataa kuva ja adjektiivit
    function loadImage(item) {
        imageContainer.src = item.image;
        adjectiveContainer.innerHTML = '';
        item.adjectives.forEach(adjective => {
            const div = document.createElement('div');
            div.id = adjective.toLowerCase();
            div.className = 'adjective';
            div.textContent = adjective;
            div.draggable = true;
            adjectiveContainer.appendChild(div);
        });
        enableDragAndDrop();
    }
});
