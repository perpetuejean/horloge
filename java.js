// Fonksyon pou mete lè a
function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const time = `${hours}:${minutes}:${seconds}`;

  document.getElementById("clock").textContent = time;
}

// Mete ajou chak 1 segonn
setInterval(updateClock, 1000);
updateClock(); // Pou pa tann premye segonn lan

// Chanje background otomatikman
document.getElementById('changeBgBtn').addEventListener('click', () => {
  const gradients = [
    'linear-gradient(120deg, #4e54c8, #8f94fb)',
    'linear-gradient(120deg, #ff6f61, #ff9966)',
    'linear-gradient(120deg, #00c9ff, #92fe9d)',
    'linear-gradient(120deg, #7F00FF, #E100FF)',
    'linear-gradient(120deg, #ffecd2, #fcb69f)',
  ];
  const random = gradients[Math.floor(Math.random() * gradients.length)];
  document.body.style.background = random;
});
