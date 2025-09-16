import confetti from 'canvas-confetti';

// Currency conversion utility
const USD_TO_YEN_RATE = 150; // Approximate exchange rate, you can make this dynamic by fetching from an API

export const convertUsdToYen = (usdPrice) => {
  return Math.round(usdPrice * USD_TO_YEN_RATE);
};

export const formatYenPrice = (yenPrice) => {
  return `¥${yenPrice.toLocaleString('ja-JP')}`;
};

export const convertAndFormatPrice = (usdPrice) => {
  const yenPrice = convertUsdToYen(usdPrice);
  return formatYenPrice(yenPrice);
};

export const runFireworks = () => {
  var duration = 5 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
}