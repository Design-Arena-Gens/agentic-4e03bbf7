function formatTwoDigits(num){
  return String(num).padStart(2, "0");
}

function getPersianGreetingByHour(hour){
  if(hour < 5) return "?? ????";
  if(hour < 12) return "??? ????";
  if(hour < 17) return "??? ????";
  if(hour < 21) return "??? ????";
  return "?? ????";
}

function updateClock(){
  const now = new Date();
  const h = formatTwoDigits(now.getHours());
  const m = formatTwoDigits(now.getMinutes());
  const s = formatTwoDigits(now.getSeconds());
  const clock = document.getElementById("clock");
  if(clock) clock.textContent = `${h}:${m}:${s}`;
}

function applyStoredTheme(){
  const stored = localStorage.getItem("theme") || "dark";
  if(stored === "light"){
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
}

function toggleTheme(){
  const isLight = document.body.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

function init(){
  applyStoredTheme();

  const greetingEl = document.getElementById("greeting");
  const hour = new Date().getHours();
  if(greetingEl){
    greetingEl.textContent = `${getPersianGreetingByHour(hour)} ? ????!`;
  }

  const toggleBtn = document.getElementById("themeToggle");
  if(toggleBtn){
    toggleBtn.addEventListener("click", toggleTheme);
  }

  updateClock();
  setInterval(updateClock, 1000);
}

document.addEventListener("DOMContentLoaded", init);
