// ✏️ EDIT THIS SECTION ONLY
const content = [
  {
    title: "One Moment I’ll Never Forget",
    text: `jab aap saturday ko lene aatey they naan k ghar toh woh mere ko bahut pasand tha aur jitni bhi series or movie jese stranger things jo apan sath pe dekhey woh sab bhi 
or jabhi sath pe apan biryani lene jate hai ghar se bate karte hue and jab ek sath gym jate they or aap bich bich pe mere ko dekhte they exarcise karte hue`
  },
  {
    title: "Things You Taught Me",
    text: "hmm, baat karne ka style jisse apna kaam nikal jae communication skills basically and jugaad lagana,har chiz ko karna aana versatile hona,compromise karna thoda bahut,brave rehena,apni baat pe ade rehena ziddi rehena,straight-forward rehena yeh sab mene aapse hi sikha hai "
  },
  {
    title: "My Childhood Hero",
    text: "",
    image: "superpop.png"
  },
  {
    title: "Time Machine",
    text: "Some bonds don’t leave. They just change form.",
    image: "memory.png"
  }
];

// 🚗 LOADING LOCATIONS
const locations = [
  "Starting...",
  "Pachpedi Naka",
  "Bhilai 3 Thana",
  "Bunny Office",
  "Tikrapara Thana",
  "Gol Bazar Thana",
  "Arriving Home..."
];

let i = 0;
const locationText = document.getElementById("locationText");

// 🔥 START LOADING
const interval = setInterval(() => {
  i++;

  if (i < locations.length) {
    locationText.innerText = locations[i];
  } else {
    clearInterval(interval);
    showScreen("home-screen");
  }
}, 1200);

// Screen switch
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Open gift
function openGift(index, element) {
  // 🎁 animation start
  element.classList.add("opening");

  setTimeout(() => {
    const item = content[index];

    document.getElementById("contentTitle").innerText = item.title;
    document.getElementById("contentText").innerText = item.text || "";

    const imgContainer = document.getElementById("contentImageContainer");
    const img = document.getElementById("contentImage");

    imgContainer.style.display = "none";
    img.src = "";

    if (item.image) {
      img.src = item.image;
      imgContainer.style.display = "flex";
    }

    showScreen("content-screen");

    // reset animation class
    element.classList.remove("opening");

  }, 400); // timing of animation
}

// Back
function goBack() {
  showScreen("home-screen");
}