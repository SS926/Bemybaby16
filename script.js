/* ===== PASSWORD (CHANGE THIS) ===== */
const PASSWORD = "goluka20thbday";

/* ===== LOGIN ===== */
function unlock() {
  const entered = document.getElementById("password").value;
  if (entered === PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("calendarWrapper").style.display = "block";
    generateCalendar();
  } else {
    alert("Wrong password ❌");
  }
}

/* ===== AUTO LOCK ===== */
window.onbeforeunload = function () {
  return null;
};

/* ===== CALENDAR CONTENT ===== */

const content = [
  {
    text: "Day 1 🐭\nLet’s begin a countdown just for you.",
    image: "day1.jpg"
  },
  {
    text: "Day 2 📸\nThis still makes me smile.",
    image: "day2.jpg"
  },
  {
    text: "Day 3 ✨\nOne thing I love more than you.",
    image: "day3.jpg"
  },
  {
    text: "Day 4 😂\nYour 1st 'effort'.",
    image: "day4.jpg"
  },
  {
    text: "Day 5 🎁\nYou don’t hear this enough, but you’re amazing at this.",
    image: "day5.jpg"
  },
  {
    text: "Day 6 ⏳\nThen vs now.",
    image: "day6.jpg"
  },
  {
    text: "Day 7 🍓\nA small version of yours I love.",
    image: "day7.jpg"
  },
  {
    text: "Day 8 💌\nSomething we should plan more often for .",
    image: "day8.jpg"
  },
  {
    text: "Day 9 🎶\nThis song makes me think of you.",
    link: "https://music.apple.com/in/album/my-love-mine-all-mine/1697335341?i=1697335814"
  },
  {
    text: "Day 10 🫠\nSomething I miss more than I admit.",
    image: "day10.jpg"
  },
  {
    text: "Day 11 🫶\nSomething you HAVE to do.",
    image: "day11.jpg"
  },
  {
    text: "Day 12 🌱\nOur first trip together.",
    image: "day12.jpg"
  },
  {
    text: "Day 13 ✈️\nOne thing I want to do with you one day.",
    image: "day13.jpg"
  },
  {
    text: "Day 14 🧁\nWe’re almost there.",
    image: "day14.jpg"
  },
  {
    text: "Day 15 🦫\nOne last day before we celebrate you.",
    image: "day15.jpg"
  },
  {
    text: "🎂 DAY 16 – HAPPY BIRTHDAYYYY 💘 Blow the candles & make a wish✨",
    birthday: true
  }
];

/* ===== GENERATE CALENDAR ===== */
function generateCalendar() {
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";
  const today = new Date().getDate();

  for (let i = 1; i <= 24; i++) {
    const day = document.createElement("div");
    day.classList.add("day");
    day.innerText = i;

    if (i > today) {
      day.classList.add("locked");
    } else {
      day.onclick = () => openModal(i);
    }

    calendar.appendChild(day);
  }
}

/* ===== MODAL ===== */
function openModal(day) {
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modalText");
  modal.style.display = "block";
  modalText.innerHTML = "";

  const item = content[day - 1];

  // 🎂 DAY 16
  if (item.birthday) {
    modalText.innerHTML = `
      <div style="font-size:80px; cursor:pointer;" id="candle">🕯️</div>
      <p>${item.text}</p>
      <canvas id="confettiCanvas"></canvas>
    `;
    document.getElementById("candle").onclick = blowCandle;
    return;
  }

  // 🎵 Apple Music (Day 9)
  let linkHTML = "";
  if (item.link) {
    linkHTML = `
      <a href="${item.link}" target="_blank"
         style="display:inline-block;margin-top:12px;
         padding:10px 16px;background:#fa243c;
         color:white;border-radius:6px;text-decoration:none;">
        🎵 Open in Apple Music
      </a>`;
  }

  modalText.innerHTML = `
    <img src="${item.image}">
    <p>${item.text}</p>
    ${linkHTML}
  `;
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  document.getElementById("modalText").innerHTML = "";
}
