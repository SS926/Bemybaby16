/* ========= BASIC LOAD TEST ========= */
alert("JS is running");

/* ========= PASSWORD ========= */
const PASSWORD = "1234";

/* ========= DATA ========= */
const content = [
  { image: "day1.jpg", text: "Birthday countdownnnnn🐭" },
  { image: "day2.jpg", text: "Something that still makes me smile🫶🏻" },
  { 
    type: "scramble",
    scrambled: "OFEFCE",
    answer: "coffee",
    success: "Only thing I love more than you🧋",
    image: "day3.jpg" },
  { image: "day4.jpg", text: "Your 1st 'effort'" },
  { image: "day5.jpg", text: "Something yk you're good at🌸"
  },
  { 
    type: "qa",
    question: "Question\n\nWhen was our farewell?",
    scrambled: "20308022",
    answer: "08/02/2023",
    success: "Then vs Now⏳",
    image: "day6.jpg" 
  },
  { image: "day7.jpg", text: "I love you🤓" },
  { image: "day8.jpg", text: "We should do this more often🦫" },

  {
    image: "day9.jpg",
    text: "🎶 This song reminds me of us",
    link: "https://music.apple.com/in/album/my-love-mine-all-mine/1697335341?i=1697335814"
  },

  { image: "day10.jpg", text: "I MISS THIS🫠" },
  { image: "day11.jpg", text: "🦾Something you NEED to do" },
  { image: "day12.jpg", text: "Our 1st trip✨" },
  { 
    type: "riddle",
    question: "🧩 Puzzle\n\nI’m not a place, but I feel like home.\nI’m not a word, but you know me well.\nWhat am I?",
    answer: "you",
    success: "hehehehe 🧁",
    image: "day13.jpg"
  },
  { image: "day14.jpg", text: "Almost there🍓" },
  { image: "day15.jpg", text: "Budday budday🦦" },

  {
    type: "birthday",
    text: "🎂 HAPPY BIRTHDAYYYY 💘\nBlow candles & make a wish(ME🦦)✨!",
    image: "day16.jpg", text: "You're 20??? Issokay no one has to know babygurl🤫"
  }
];

/* ========= UNLOCK ========= */
function unlock() {
  const input = document.getElementById("password").value;

  if (input !== PASSWORD) {
    alert("Wrong password");
    return;
  }

  document.getElementById("login").style.display = "none";
  document.getElementById("calendar").style.display = "grid";
  buildCalendar();
}

/* ========= BUILD CALENDAR ========= */
function buildCalendar() {
  const cal = document.getElementById("calendar");
  cal.innerHTML = "";

  for (let i = 1; i <= 16; i++) {
    const d = document.createElement("div");
    d.className = "day";
    d.innerText = i;
    d.onclick = () => openModal(i);
    cal.appendChild(d);
  }
}

/* ========= MODAL ========= */
function openModal(day) {
  const modal = document.getElementById("modal");
  const box = document.getElementById("modalText");
  const item = content[day - 1];

  modal.style.display = "block";
  box.innerHTML = "";

  if (item.type === "birthday") {
    box.innerHTML = `
      <div id="candle" style="font-size:80px;cursor:pointer;">🕯️</div>
      <p>${item.text}</p>
      <img src="${item.image}">
      <canvas id="confettiCanvas"
        style="position:fixed;inset:0;pointer-events:none;"></canvas>
    `;
    document.getElementById("candle").onclick = blowCandle;
    return;
  }

  if (item.type === "scramble") {
    box.innerHTML = `
      <p>Unscramble:</p>
      <h2>${item.scrambled}</h2>
      <input id="answer">
      <br><br>
      <button onclick="check('${item.answer}','${item.success}')">Submit</button>
      <p id="result"></p>
    `;
    return;
  }

  if (item.type === "qa") {
    box.innerHTML = `
      <p>${item.question}</p>
      <h2>${item.scrambled}</h2>
      <input id="answer">
      <br><br>
      <button onclick="check('${item.answer}','${item.success}','${item.image}')">Submit</button>
      <p id="result"></p>
      <img id="hiddenImage" src="${item.image}" style="display:none;margin-top:15px;">
    `;
    return;
  }

  if (item.type === "riddle") {
    box.innerHTML = `
      <p style="white-space:pre-line;">${item.question}</p>
      <input id="answer">
      <br><br>
      <button onclick="check('${item.answer}','${item.success}','${item.image}')">Submit</button>
      <p id="result"></p>
      <img id="hiddenImage" src="${item.image}" style="display:none;margin-top:15px;">
    `;
    return;
  }

  let link = item.link
    ? `<a href="${item.link}" target="_blank">🎵 Open in Apple Music</a>`
    : "";

  box.innerHTML = `
    <img src="${item.image}">
    <p>${item.text}</p>
    ${link}
  `;
}

/* ========= CHECK ANSWER ========= */
function check(ans, msg) {
  const val = document.getElementById("answer").value.toLowerCase();
  document.getElementById("result").innerText =
    val === ans.toLowerCase() ? msg : "❌ Try again";
}

/* ========= CLOSE ========= */
function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("modalText").innerHTML = "";
}

function checkWithImage(correct, successText, imagePath) {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  const result = document.getElementById("result");
  const img = document.getElementById("hiddenImage");

  if (input === correct.toLowerCase()) {
    result.innerText = successText;
    img.style.display = "block";
  } else {
    result.innerText = "❌ Try again";
  }
}
/* ========= CONFETTI ========= */
function blowCandle() {
  const c = document.getElementById("confettiCanvas");
  const ctx = c.getContext("2d");
  c.width = innerWidth;
  c.height = innerHeight;

  const t = setInterval(() => {
    ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;
    ctx.beginPath();
    ctx.arc(Math.random() * c.width, Math.random() * c.height, 6, 0, Math.PI * 2);
    ctx.fill();
  }, 30);

  setTimeout(() => clearInterval(t), 3000);
  const heartsContainer = document.querySelector(".hearts");

if (heartsContainer) {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }, 500);
}
