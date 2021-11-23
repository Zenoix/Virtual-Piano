const keysList = [
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyW",
  "KeyE",
  "KeyT",
  "KeyY",
  "KeyU",
];

const kbdElements = document.querySelectorAll("KBD");

function playAudio(key) {
  let audio = new Audio(`assets/${key}.mp3`);
  audio.volume = 0.3;
  audio.play();
}

function getKBDElement(code) {
  switch (code) {
    case "KeyA":
      return kbdElements[0];
    case "KeyS":
      return kbdElements[1];
    case "KeyD":
      return kbdElements[2];
    case "KeyF":
      return kbdElements[3];
    case "KeyG":
      return kbdElements[4];
    case "KeyH":
      return kbdElements[5];
    case "KeyJ":
      return kbdElements[6];
    case "KeyW":
      return kbdElements[7];
    case "KeyE":
      return kbdElements[8];
    case "KeyT":
      return kbdElements[9];
    case "KeyY":
      return kbdElements[10];
    case "KeyU":
      return kbdElements[11];
  }
}

document.addEventListener("keypress", function (e) {
  if (keysList.includes(e.code)) {
    playAudio(e.key.toUpperCase());
    const el = getKBDElement(e.code);
    console.log(el);
    el.classList.add("pressed");
  }
});

document.addEventListener("keyup", function (e) {
  if (keysList.includes(e.code)) {
    const el = getKBDElement(e.code);
    el.classList.remove("pressed");
  }
});

document.addEventListener("click", function (e) {
  if (e.target.tagName === "KBD") {
    playAudio(e.target.innerText);
  }
});