const watchbtn = document.querySelector(".watch-btn");
const videomain = document.querySelector(".video-main");
const videoplayer = document.querySelector(".video-player");

function show() {
  videomain.style.display = "block";
  videoplayer.style.display = "block";
  videoplayer.play();
}
watchbtn.addEventListener("click", show);

function hide() {
  videomain.style.display = "none";
  videoplayer.style.display = "none";
  videoplayer.pause();
}
videomain.addEventListener("click", hide);

const few = document.querySelector(".ne-nav");
const feww = document.querySelector(".ne-nav a")
const mobileicon = document.querySelector(".mobile-icon");
const hero = document.querySelector(".hero");
function sow() {
  few.style.display = "block";
  
}
mobileicon.addEventListener("click", sow);

function hid() {
  few.style.display = "none";
}

hero.addEventListener("click", hid);
