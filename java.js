function updateClock() {
  var now = new Date();
  var time = now.toLocaleTimeString(); // Affiche l'heure seule, pas la date complète
  document.getElementById("clock").textContent = time;
}

// Rafrechi chak 1 segonn
setInterval(updateClock, 1000);

// Mete premye lè a imedyatman
updateClock();
