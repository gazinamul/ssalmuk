const totalMoney = document.getElementById("totalMoney");
const openDrawerButton = document.getElementById("openDrawer");
const drawer = document.getElementById("drawer");

function formatWon(value) {
  return value.toLocaleString("ko-KR") + "원";
}

function showTotalWithCountUp() {
  const target = 1050;
  const duration = 650;
  const startTime = performance.now();

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(target * eased);
    totalMoney.textContent = formatWon(current);

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

openDrawerButton.addEventListener("click", () => {
  drawer.classList.toggle("open");
});

showTotalWithCountUp();
