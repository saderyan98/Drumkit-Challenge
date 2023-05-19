var audioSrc = 'openhat.wav';
const button = document.getElementById("button");

function playSound() {
  var audio = new Audio(audioSrc);
  audio.play();
}


button.addEventListener('keydown', function(event) {
  playSound();
});


button.addEventListener('click', function(event) {
  playSound();
});