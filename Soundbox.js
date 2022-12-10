/** @format */

const notes = [
  {
    note: "A",
    id: "mboom",
    audioFile: "boom.wav",
    class: "button_container_elements",
  },
  {
    note: "S",
    id: "mclap",
    audioFile: "clap.wav",
    class: "button_container_elements",
  },
  {
    note: "D",
    id: "mhihat",
    audioFile: "hihat.wav",
    class: "button_container_elements",
  },
  {
    note: "F",
    id: "mboom",
    audioFile: "boom.wav",
    class: "button_container_elements",
  },
  {
    note: "G",
    id: "mkick",
    audioFile: "kick.wav",
    class: "button_container_elements",
  },
  {
    note: "H",
    id: "mopenhat",
    audioFile: "openhat.wav",
    class: "button_container_elements",
  },
  {
    note: "J",
    id: "mride",
    audioFile: "ride.wav",
    class: "button_container_elements",
  },
  {
    note: "K",
    id: "msnare",
    audioFile: "snare.wav",
    class: "button_container_elements",
  },
  {
    note: "L",
    id: "mtink",
    audioFile: "tink.wav",
    class: "button_container_elements",
  },
];

const audioContainer = document.querySelector(".audio");
console.log(audioContainer);
const buttonContainer = document.querySelector(".button_container");
console.log(buttonContainer);

if (audioContainer != undefined && audioContainer != null) {
  for (const { note, id, audioFile } of notes) {
    const audioElement = document.createElement("audio");
    audioElement.id = id;
    audioElement.preload = "auto";
    audioElement.src = `./audiofiles/${audioFile}`;

    const buttonElement = document.createElement("button");
    buttonElement.textContent = note;
    buttonElement.classList.add("button_container_elements");
    buttonElement.addEventListener("click", () => {
      audioElement.play();
    });

    audioContainer.appendChild(audioElement);
    buttonContainer.appendChild(buttonElement);
  }
}
