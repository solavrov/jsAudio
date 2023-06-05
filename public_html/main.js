import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6dVE4Ic7AeH1uzeIHgDB_rrgo8EXrYu0",
  authDomain: "diktant5.firebaseapp.com",
  projectId: "diktant5",
  storageBucket: "diktant5.appspot.com",
  messagingSenderId: "702825342319",
  appId: "1:702825342319:web:fbbc869aba354ce2a1349a",
  measurementId: "G-ZP4BM4CFHD"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage);

const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const stopButton = document.getElementById("stopButton");
const progress = document.getElementById("progress");
const myAudio = document.createElement("audio");


async function queryURL(fileName) {
    const url = await getDownloadURL(ref(storage, fileName));
    return url;
}

let currentURL = await queryURL("d2.mp3");


playButton.addEventListener("click", function() {
    if (!myAudio.hasAttribute("src")) {
        myAudio.setAttribute("src", currentURL);
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



