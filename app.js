const audioFiles = {
  'a': 'openhat.wav',
  'b': 'kick.wav',
  'c': 'snare.wav',
  'd': 'hihat.wav',
  'e': 'clap.wav',
  'f': 'ride.wav',
  'g': 'tink.wav',
  'h': 'tom.wav',
  'i': 'openhat.wav',
  'j': 'kick.wav',
  'k': 'snare.wav',
  'l': 'hihat.wav',
  'm': 'clap.wav',
  'n': 'ride.wav',
  'o': 'tink.wav',
  'p': 'tom.wav',
  'q': 'openhat.wav',
  'r': 'kick.wav',
  's': 'snare.wav',
  't': 'hihat.wav',
  'u': 'clap.wav',
  'v': 'ride.wav',
  'w': 'tink.wav',
  'x': 'tom.wav',
  'y': 'openhat.wav',
  'z': 'kick.wav',
};

const button = document.getElementById("button");

function playSound(audioFile) {
  const audio = new Audio(audioFile);
  audio.load();
  audio.play();
}

function handleKeyDown(event) {
  const key = event.key.toLowerCase();
  const audioFile = audioFiles[key];

  if (audioFile) {
    playSound(audioFile);
  }
}

button.addEventListener('click', function(event) {
playSound();})

button.addEventListener('click', function(event) {
  const keys = Object.keys(audioFiles);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const audioFile = audioFiles[randomKey];
  playSound(audioFile);
});

document.addEventListener('keydown', handleKeyDown);