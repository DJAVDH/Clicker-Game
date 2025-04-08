const popup = document.getElementById('popup');
const openBtn = document.getElementById('openPopup');
const closeBtn = document.getElementById('closePopup');
const coin = document.getElementById('coin');
const bidDisplay = document.getElementById('bidAmount');
let bid = 0;
let rotation = 0;
openBtn.addEventListener('click', () =>popup.classList.remove('hidden'));
closeBtn.addEventListener('click', () => popup.classList.add('hidden'));
 
document.querySelectorAll('.adjust').forEach(button => {
  button.addEventListener('click', () => {
    bid += parseInt(button.dataset.change);
    if (bid < 0) bid = 0;
    bidDisplay.textContent = bid;
  });
});
 
coin.addEventListener('click', () => {
  const isWin = Math.random() > 0.5;
  const extraRotation = 1440; // 4 keer rond
  rotation += extraRotation + (isWin ? 0 : 180); // stop op juiste kant
 
  coin.style.transform = `rotateY(${rotation}deg)`;
});