const PASSWORD = "golakabday20"; // change if you want

const content = [
  { image: "day1.jpg", text: "Birthday countdown🐭" },
  { image: "day2.jpg", text: "This still makes me smile✨" },

  /* DAY 3 – SCRAMBLE */
  {
    scramble: true,
    scrambled: "FEOCEF",
    answer: "coffee",
    successText: "Yk I love it more than you🧋",
    image: "day3.jpg"
  },

  { image: "day4.jpg", text: "Your 1st 'effort'😂" },
  { image: "day5.jpg", text: "yk you're good at it🎁" },

  /* DAY 6 – QUESTION + DATE SCRAMBLE */
  {
    qaScramble: true,
    question: "What day was our farewell?",
    scrambled: "28030202",
    answer: "08/02/2023",
    successText: "Then vs Now⏳",
    image: "day6.jpg"
  },

  { image: "day7.jpg", text: "Reason why I love you🫶🏻" },
  { image: "day8.jpg", text: "We should do this more often together😮‍💨" },

  /* DAY 9 – MUSIC */
  {
    image: "day9.jpg",
    text: "This song reminds me of us 🎶",
    link: "https://music.apple.com/in/album/my-love-mine-all-mine/1697335341?i=1697335814"
  },

  { image: "day10.jpg", text: "I miss this most about you🫠" },
  { image: "day11.jpg", text: "🦾Something you NEED to do" },
  { image: "day12.jpg", text: "The reason I like going on trips w you🦦" },

  /* DAY 13 – RIDDLE */
  {
    riddle: true,
    question:
      "🧩 Riddle\n\nI’m not a place, but I feel like home.
                    I’m not a word, but you know me well.
                    What am I?",
    answer: "you",
    successText: "Hehehehe🧁",
    image: "day13.jpg"
  },

  { image: "day14.jpg", text: "Almost there🤓" },
  { image: "day15.jpg", text: "Hehe golu🦫" },

  /* DAY 16 – BIRTHDAY */
  {
    birthday: true,
    text: "🎂 Happy Birthdayyyy 💘 Blow the candles & make a wish(ME)✨",
    image: "day16.jpg", text: "you're 20??? Issokay no one has to know babygurl🤫"
  }
];

/* LOGIN */
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

/* OPEN MODAL */
function openModal(day) {
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modalText");
  modal.style.display = "block";
  modalText.innerHTML = "";

  const item = content[day - 1];

  /* 🎂 BIRTHDAY */
  if (item.birthday) {
    modalText.innerHTML = `
      <div id="candle" style="font-size:80px; cursor:pointer;">🕯️</div>
      <p>${item.text}</p>
      <canvas id="confettiCanvas"
        style="position:fixed; inset:0; pointer-events:none;"></canvas>
    `;
    document.getElementById("candle").onclick = blowCandle;
    return;
  }

  /* 🧩 SCRAMBLE */
  if (item.scramble) {
    modalText.innerHTML = `
      <p>🧩 Unscramble this word:</p>
      <h2>${item.scrambled}</h2>
      <input id="scrambleInput" placeholder="Answer">
      <br><br>
      <button onclick="checkScramble()">Submit</button>
      <p id="scrambleResult"></p>
    `;
    window.scrambleAnswer = item.answer;
    window.scrambleSuccess = item.successText;
    return;
  }

  /* ❓ QA SCRAMBLE */
  if (item.qaScramble) {
    modalText.innerHTML = `
      <p>${item.question}</p>
      <h2>${item.scrambled}</h2>
      <input id="qaInput" placeholder="Your answer">
      <br><br>
      <button onclick="checkQAScramble()">Submit</button>
      <p id="qaResult"></p>
    `;
    window.qaAnswer = item.answer;
    window.qaSuccess = item.successText;
    return;
  }

  /* 🧩 RIDDLE */
  if (item.riddle) {
    modalText.innerHTML = `
      <p style="white-space:pre-line;">${item.question}</p>
      <input id="riddleInput" placeholder="Your answer">
      <br><br>
      <button onclick="checkRiddle()">Submit</button>
      <p id="riddleResult"></p>
    `;
    window.riddleAnswer = item.answer.toLowerCase();
    window.riddleSuccess = item.successText;
    return;
  }

  /* 🎵 MUSIC */
  let linkHTML = "";
  if (item.link) {
    linkHTML = `<a class="music-btn" href="${item.link}" target="_blank">
      Open in Apple Music</a>`;
  }

  modalText.innerHTML = `
    <img src="${item.image}">
    <p>${item.text}</p>
    ${linkHTML}
  `;
}

/* CLOSE MODAL */
function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("modalText").innerHTML = "";
}

/* PUZZLE LOGIC */
function checkScramble() {
  const v = document.getElementById("scrambleInput").value.toLowerCase();
  document.getElementById("scrambleResult").innerText =
    v === scrambleAnswer ? scrambleSuccess : "❌ Try again";
}

function checkQAScramble() {
  const v = document.getElementById("qaInput").value;
  document.getElementById("qaResult").innerText =
    v === qaAnswer ? qaSuccess : "❌ Try again";
}

function checkRiddle() {
  const v = document.getElementById("riddleInput").value.toLowerCase();
  document.getElementById("riddleResult").innerText =
    v === riddleAnswer ? riddleSuccess : "❌ Try again";
}

/* 🎉 CONFETTI */
function blowCandle() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 4 + 2,
    color: `hsl(${Math.random() * 360},100%,60%)`
  }));

  const anim = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y += p.d, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }, 20);

  setTimeout(() => {
    clearInterval(anim);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 3000);
}
