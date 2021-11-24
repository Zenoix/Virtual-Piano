const whiteKeysList = [
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ"
];

const blackKeysList = [
  "KeyW",
  "KeyE",
  "KeyT",
  "KeyY",
  "KeyU",
]

const kbdElements = document.querySelectorAll("KBD");
const keyToElement = {
  "KeyA": kbdElements[0],
  "KeyS": kbdElements[1],
  "KeyD": kbdElements[2],
  "KeyF": kbdElements[3],
  "KeyG": kbdElements[4],
  "KeyH": kbdElements[5],
  "KeyJ": kbdElements[6],
  "KeyW": kbdElements[7],
  "KeyE": kbdElements[8],
  "KeyT": kbdElements[9],
  "KeyY": kbdElements[10],
  "KeyU": kbdElements[11]
}

function playAudio(key) {
  let audio = new Audio(`assets/${key}.mp3`);
  audio.volume = whiteKeysList.includes(`Key${key}`) ? 0.3 : 0.5;
  audio.play();
}

document.addEventListener("keypress", function (e) {
  if (whiteKeysList.includes(e.code) || blackKeysList.includes(e.code)) {
    playAudio(e.key.toUpperCase());
    keyToElement[e.code].classList.add("pressed");
  }
});

document.addEventListener("keyup", function (e) {
  if (whiteKeysList.includes(e.code) || blackKeysList.includes(e.code)) {
    keyToElement[e.code].classList.remove("pressed");
  }
});

document.addEventListener("click", function (e) {
  if (e.target.tagName === "KBD") {
    playAudio(e.target.innerText);
  }
});