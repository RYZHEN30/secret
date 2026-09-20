const heartButton = document.getElementById("heartButton");
const letter = document.querySelector(".letter");
const exitButton = document.getElementById("exitButton");
const song = document.getElementById("song");

heartButton.addEventListener("click", function() {
    letter.classList.add("show");
    heartButton.style.display = "none";
    song.play();
});

exitButton.addEventListener("click", function() {
    letter.classList.remove("show");
    heartButton.style.display = "block";
    song.pause();
    song.currentTime = 0;
});