/** @format */

window.addEventListener("keydown", playAudio);

function playAudio(e) {
  const audio = document.querySelector(`audio[data-key = "${e.key}"]`);
  const key = document.querySelector(`div[data-key="${e.key}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing_sound");
}

function removeStyle(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing_sound");
}

const pressedKeys = Array.from(document.querySelectorAll(".key_style"));
console.log(pressedKeys);
pressedKeys.forEach((pKey) =>
  pKey.addEventListener("transitionend", removeStyle)
);
