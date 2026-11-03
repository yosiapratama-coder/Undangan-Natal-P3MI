// Efek salju ringan; jumlah partikel dibatasi agar tetap nyaman di ponsel.
const snow = document.querySelector(".snow");
const count = window.innerWidth < 600 ? 28 : 55;
for (let i = 0; i < count; i++) {
  const flake = document.createElement("i");
  flake.className = "flake";
  flake.style.left = Math.random() * 100 + "%";
  flake.style.animationDuration = (7 + Math.random() * 12) + "s";
  flake.style.animationDelay = (-Math.random() * 18) + "s";
  flake.style.opacity = (0.2 + Math.random() * 0.65).toFixed(2);
  flake.style.setProperty("--drift", (Math.random() * 90 - 45) + "px");
  const size = (2 + Math.random() * 3) + "px";
  flake.style.width = size;
  flake.style.height = size;
  snow.appendChild(flake);
}
