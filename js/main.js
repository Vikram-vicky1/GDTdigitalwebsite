var video = document.getElementById("myvid");
var btn = document.getElementById("mybtn");

function myFunction() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
    btn.innerHTML = "";
  }
}


