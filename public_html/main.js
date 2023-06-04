
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const stopButton = document.getElementById("stopButton");
const progress = document.getElementById("progress");
const myAudio = document.createElement("audio");


playButton.addEventListener("click", function() {
    if (!myAudio.hasAttribute("src")) {
        myAudio.setAttribute("src", "1.mp3");
        myAudio.currentTime = 0;
    }
    myAudio.play();
});


pauseButton.addEventListener("click", function() {
    myAudio.pause();
});


stopButton.addEventListener("click", function() {
    myAudio.pause();
    myAudio.removeAttribute("src");
    myAudio.load();
    progress.value = 0;
});

myAudio.addEventListener("timeupdate", function() {
   if (myAudio.hasAttribute("src")) {
       progress.value = Math.round((myAudio.currentTime / myAudio.duration) * 100); 
   }
});



