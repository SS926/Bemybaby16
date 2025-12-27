function unlock() {
  alert("Unlock clicked");

  const input = document.getElementById("password").value;

  if (input !== "1234") {
    alert("Wrong password");
    return;
  }

  document.getElementById("login").style.display = "none";
  document.getElementById("calendar").style.display = "grid";

  if (typeof buildCalendar === "function") {
    buildCalendar();
  } else {
    alert("buildCalendar missing");
  }
}
