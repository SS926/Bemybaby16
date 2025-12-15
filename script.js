const PASSWORD = "golukabday20"; // change this

const content = [
  { image: "day1.jpg", text: "Birthday countdownnnnn🐭" },
  { image: "day2.jpg", text: "Something that still makes me smile🫶🏻" },
  { 
  scramble: true,
  scrambled: "OFEFCE",
  answer: "coffee",
  successText: "Only thing I love more than you🧋",
  image: "day3.jpg" },
  { image: "day4.jpg", text: "Your 1st 'effort'" },
  { image: "day5.jpg", text: "Something yk you're good at🌸" },
  { 
  qaScramble: true,
  question: "Question\n\nWhen was our farewell?",
  scrambled: "20308022",
  answer: "08/02/2023",
  successText: "Then vs Now⏳",
  image: "day6.jpg" },
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
  puzzle: true,
  question: "🧩 Puzzle\n\nI’m not a place, but I feel like home.\nI’m not a word, but you know me well.\nWhat am I?",
  answer: "you",
  successText: "Hehehehe 🧁",
  image: "day13.jpg"
  },
  { image: "day14.jpg", text: "Almost there🍓" },
  { image: "day15.jpg", text: "Budday budday🦦" },

  {
    birthday: true,
    text: "🎂 HAPPY BIRTHDAYYYY 💘\nBlow candles & make a wish(ME🦦)✨!",
    image: "day16.jpg", text: "You're 20??? Issokay no one has to know babygurl🤫"
  }
];

/* UNLOCK */
function unlock() {
  if (document.getElementById("password").value !== PASSWORD) return;
  document.getElementById("login").style.display = "none";
  document.getElementById("calendar").style.display = "grid";
  buildCalendar();
}

/* BUILD CALENDAR */
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

/* MODAL */
function openModal(day) {
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modalText");
  modal.style.display = "flex";
  modalText.innerHTML = "";

  const item = content[day - 1];

  /* 🎂 DAY 16 – BIRTHDAY */
  if (item.birthday) {
    modalText.innerHTML = `
      <div id="candle" style="font-size:80px; cursor:pointer;">🕯️</div>
      <p>${item.text}</p>
      <canvas id="confettiCanvas"></canvas>
    `;
    document.getElementById("candle").onclick = blowCandle;
    return;
  }

  /* 🧩 DAY 13 – PUZZLE */
  if (item.puzzle) {
    modalText.innerHTML = `
      <p style="white-space:pre-line;">${item.question}</p>
      <input id="puzzleInput" placeholder="Your answer"
        style="padding:10px;border-radius:6px;border:none;width:80%;">
      <br><br>
      <button onclick="checkPuzzle()">Submit</button>
      <p id="puzzleResult"></p>
    `;
    window.correctAnswer = item.answer.toLowerCase();
    window.successText = item.successText;
    return;
  }
  /* ❓ QUESTION + DATE SCRAMBLE MODAL */
if (item.qaScramble) {
  modalText.innerHTML = `
    <p style="white-space:pre-line; font-size:16px;">
      ${item.question}
    </p>

    <p style="margin-top:10px; font-size:14px;">
      🔀 <strong>Scrambled hint</strong>
    </p>

    <h2 style="letter-spacing:2px;">
      ${item.scrambled}
    </h2>

    <input
      id="qaInput"
      placeholder="DD/MM/YYYY"
      style="
        padding:10px;
        border-radius:6px;
        border:none;
        width:80%;
        text-align:center;
        font-size:16px;
      "
    >

    <br><br>

    <button onclick="checkQAScramble()">
      Submit
    </button>

    <p id="qaResult" style="margin-top:12px;"></p>
  `;

  window.qaAnswer = item.answer.toLowerCase();
  window.qaSuccess = item.successText;
  return;
}

  /* 🎵 APPLE MUSIC (DAY 9) */
  let linkHTML = "";
  if (item.link) {
    linkHTML = `<a class="music-btn" href="${item.link}" target="_blank">🎵 Open in Apple Music</a>`;
  }

  /* NORMAL DAYS */
  modalText.innerHTML = `
    <img src="${item.image}">
    <p>${item.text}</p>
    ${linkHTML}
  `;
}

/* CLOSE */

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("modalText").innerHTML = "";
}

/* CONFETTI */
function blowCandle() {
  const c = document.getElementById("confettiCanvas");
  const ctx = c.getContext("2d");
  c.width = window.innerWidth;
  c.height = window.innerHeight;

  const pieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 4 + 2,
    color: `hsl(${Math.random() * 360},100%,60%)`
  }));

  let t = setInterval(() => {
    ctx.clearRect(0,0,c.width,c.height);
    pieces.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y += p.d, p.r, 0, Math.PI*2);
      ctx.fill();
    });
  }, 20);

  setTimeout(() => {
    clearInterval(t);
    ctx.clearRect(0,0,c.width,c.height);
  }, 3000);
}
function checkPuzzle() {
  const userAnswer = document.getElementById("puzzleInput").value.trim().toLowerCase();
  const result = document.getElementById("puzzleResult");

  if (userAnswer === correctAnswer) {
    result.innerText = successText;
  } else {
    result.innerText = "❌ Try again";
  }
function checkQAScramble() {
  const userAnswer = document.getElementById("qaInput").value.trim().toLowerCase();
  const result = document.getElementById("qaResult");

  if (userAnswer === qaAnswer) {
    result.innerText = qaSuccess;
  } else {
    result.innerText = "❌ Try again";
  }

function checkQAScramble() {
  const input = document.getElementById("qaInput").value.trim().toLowerCase();
  const result = document.getElementById("qaResult");

  if (input === qaAnswer) {
    result.innerText = qaSuccess;
  } else {
    result.innerText = "❌ Try again";
  }
}
