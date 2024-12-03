const videoBoxes = document.querySelectorAll(".video-box");
let score = 0;

    videoBoxes.forEach(box => {
        const video = box.querySelector("video");
        const title = box.querySelector(".title");

        box.addEventListener("mouseenter", () => {
            title.style.display = "none"; // Piilota teksti
            video.style.display = "block"; // Näytä video
            video.play();
        });

        box.addEventListener("mouseleave", () => {
            title.style.display = "block"; // Näytä teksti
            video.style.display = "none"; // Piilota video
            video.pause();
            video.currentTime = 0; // Resetoi video alkuun
        });
    });

    document.getElementById("scoreButton").addEventListener("click", function() {
        score += 15; // Lisää 15 pistettä
        document.getElementById("score").textContent = score; // Päivittää pistemäärän näkyviin
    });
