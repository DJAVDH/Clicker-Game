let betAmount = 0;
let isFlipping = false;

document.addEventListener('DOMContentLoaded', () => {
  const betDisplay = document.getElementById('betAmount');
  const popup = document.getElementById('coinflipPopup');
  const coin = document.getElementById('coin');
  const coinButton = document.getElementById('coinButton');
  const closePopup = document.getElementById('closePopup');
  const adjustButtons = document.querySelectorAll('.adjustBet');

  window.money = window.money || 10000;

  function formatMoney(amount) {
    const geldDisplay = document.getElementById("geldDisplay");
    if (geldDisplay) {
      geldDisplay.textContent = amount;
    }
  }

  // Popup openen
  coinButton.onclick = () => {
    popup.classList.remove('hidden');
  };

  // Popup sluiten
  closePopup.onclick = () => {
    popup.classList.add('hidden');
  };

  // Inzet aanpassen
  adjustButtons.forEach(btn => {
    btn.onclick = () => {
      if (isFlipping) return; // ⛔ Blokkeer tijdens flip

      const value = parseInt(btn.getAttribute('data-value'));
      const newBet = betAmount + value;

      if (value > 0 && newBet <= money) {
        betAmount = newBet;
      } else if (value < 0) {
        betAmount = Math.max(0, newBet);
      }

      updateBetDisplay();
    };
  });

  function updateBetDisplay() {
    betDisplay.textContent = betAmount;
  }

  // Coinflip starten
  coin.onclick = () => {
    if (betAmount === 0 || isFlipping) return;

    isFlipping = true; // 🔒 Blokkeer interactie

    coin.classList.add('spin');

    setTimeout(() => {
      const result = Math.random() < 0.5 ? 'Win' : 'Loose';
      const front = coin.querySelector('.front');
      const back = coin.querySelector('.back');

      front.textContent = result === 'Win' ? 'Win' : 'Loose';
      back.textContent  = result === 'Win' ? 'Loose' : 'Win';

      if (result === 'Win') {
        money += betAmount;
      } else {
        money -= betAmount;
      }

      formatMoney(money);
      betAmount = 0;
      updateBetDisplay();

      coin.classList.remove('spin');
      isFlipping = false; // 🔓 Interactie weer aan
    }, 2000);
  };
});

