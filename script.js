// 🔥 EDIT EVERYTHING HERE 🔥
const content = {
  welcomeTitle: "Hey My Rasmalai 💖",
  welcomeText: "This Proves That Ayaan Yafai has a heart thats youuuuuuu",

  loadingText: "Cuteness Overloaded… 💫",

  giftTitle: "I Have Something For You 🎁 (open all 5 dummy)",

  letters: [
    {
      title: "Gift One-The Oath💌",
      message: "I your Kuchupuchu takes the Oath To never leave you when you need me no matter how upset i am with you and never cheat on you and love you with all my heart, loving,praising and protecting you  not just like a partner but also like your bsf, till my last breath Just like The Terminator<3<3<3."
    },
    {
      title: "Gift Two- My Hopes🌙",
      message: "I hope our bond stays like this always and gets stronger with every kiss and every kaleshhh and i wish and i know that we will spend the rest of our lives by holding each others hands with all the love and joy and have a sweet cozy home together ."
    },
    {
      title: "Gift Three- Best Memory of the us 🫶",
      message: "My every moment with is is the best in m life may it be trip,annual function,walk from aps to schl,farewell ."
    },
    {
      title: "Gift Four- A Portrait of My Queen❤️",
      message: "this portrait right here ? just made Monalisa jealous ufffff my highness my love."
    },
{
  title: "One apology 🤍",
  message:
    "I can’t promise perfection.But I can promise effort, honesty, and seeing you — even on the days when life gets heavy and i will always always be there for you to listen to you and be there to understand your side to it was foolish and immaturity of me to unsee your pain and to suffocate you but trust me i have understood the difference between genuine anger and constant yelling and you will never feel scared to tell me something from now on love you........"
}

  ]
};

// ⚙️ LOGIC (DON'T TOUCH BELOW)
const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

document.getElementById("welcomeTitle").innerText = content.welcomeTitle;
document.getElementById("welcomeText").innerText = content.welcomeText;
document.getElementById("loadingText").innerText = content.loadingText;
document.getElementById("giftTitle").innerText = content.giftTitle;
const loadingLines = [
  "tumko psnd aaega yeh hehehehehhe",
  "it took some hardwork but it was worth it",
  "getting curious ?? hehehe",
  "i should get atleast 25 mwahs after thisssssssss"
];

let loadingIndex = 0;

function goToLoading() {
  showScreen("screen-loading");

  loadingIndex = 0;
  document.getElementById("loadingText").innerText = loadingLines[0];

  let percent = 0;
  const maxPercent = 1326;
  const totalDuration = 8000; // ⏱ ~8 seconds
  const intervalTime = 100;
  const step = Math.ceil(maxPercent / (totalDuration / intervalTime));

  document.getElementById("loadingPercent").innerText =
    `${percent} / ${maxPercent} ❤️`;

  const percentInterval = setInterval(() => {
    percent += step;
    if (percent >= maxPercent) percent = maxPercent;

    document.getElementById("loadingPercent").innerText =
      `${percent} / ${maxPercent} ❤️`;
  }, intervalTime);

  const textInterval = setInterval(() => {
    loadingIndex++;

    if (loadingIndex < loadingLines.length) {
      document.getElementById("loadingText").innerText =
        loadingLines[loadingIndex];
    } else {
      clearInterval(textInterval);
      clearInterval(percentInterval);
      showScreen("screen-gifts");
    }
  }, 2000);
}

function openGift(index) {
  document.getElementById("letterTitle").innerText = content.letters[index].title;
  document.getElementById("letterMessage").innerText = content.letters[index].message;

  const frame = document.getElementById("queenFrame");

  if (index === 3) { // Gift 4 (0-based index)
    frame.classList.remove("hidden");
  } else {
    frame.classList.add("hidden");
  }

  showScreen("screen-letter");
}

function goBack() {
  showScreen("screen-gifts");
}
