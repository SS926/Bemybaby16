/* ===== PASSWORD (CHANGE THIS) ===== */
const PASSWORD = "20thbdayyyyy";

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
    text: "Day 4 😂\nOur 1st 'date' together.",
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
    text: "Day 7 🍓\nA small moment I love with you.",
    image: "day7.jpg"
  },
  {
    text: "Day 8 💌\nA thank you I should say more often for .",
    image: "day8.jpg"
  },
  {
    text: "Day 9 🎶\nThis song makes me think about us.",
    image: "day9.jpg"
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
    text: "Day 13 ✈️\nOne thing I want to do with you someday.",
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
    text: "🎂 DAY 16 – HAPPY BIRTHDAYYYY 💘",
    image: "day16.jpg"
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
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalText").innerText = content[day - 1];
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
