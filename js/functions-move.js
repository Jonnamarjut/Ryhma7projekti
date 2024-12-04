const videoBoxes = document.querySelectorAll(".video-box");
let score = 0;

    videoBoxes.forEach(box => {
        const video = box.querySelector("video");
        const title = box.querySelector(".title");

        box.addEventListener("mouseenter", () => { // valittiin touchend tapahtuma, että video lähtee käyntiin näpäyttämällä
            title.style.display = "none"; // Piilota teksti kun video menee päälle
            video.style.display = "block";
            video.play();
        });

        box.addEventListener("mouseleave", () => {
            title.style.display = "block"; 
            video.style.display = "none";
            video.pause();
            video.currentTime = 0;
        });
    });

    document.getElementById("scoreButton").addEventListener("click", function() {
        score += 15; // Lisää 15 pistettä
        document.getElementById("score").textContent = score;
    });

    // tätä koodia auttoi tekemään chatgpt, siltä osin, että sain nuo otsikon ja videot toimimaan halutulla tavalla