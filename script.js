alert("JS OK");

function unlock() {
  const input = document.getElementById("password").value.trim();

  if (input !== PASSWORD) {
    alert("Wrong password ❌");
    return;
  }

  document.getElementById("login").style.display = "none";
  document.getElementById("calendar").style.display = "grid";
  buildCalendar();
}
