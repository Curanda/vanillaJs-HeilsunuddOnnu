import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const rippleButtons = document.querySelectorAll(".ripple-button");

  const animatingButtons = new Map();

  rippleButtons.forEach((button) => {
    const rippleContainer =
      button.parentElement.querySelector(".ripple-container");
    if (!rippleContainer) return;
    button.addEventListener("mouseenter", function () {
      if (animatingButtons.get(button)) return;
      animatingButtons.set(button, true);
      const wave = document.createElement("div");
      wave.className = "wave";
      rippleContainer.appendChild(wave);
      setTimeout(() => {
        if (rippleContainer.contains(wave)) {
          rippleContainer.removeChild(wave);
        }
        animatingButtons.set(button, false);
      }, 1800);
    });
  });

  const hafnarfjordurButton = document.getElementById("hafnarfjordur-button");
  const hafnarfjordurButtonPulse = document.getElementById(
    "hafnarfjordur-button-pulse"
  );
  const vogarButton = document.getElementById("vogar-button");
  const vogarButtonPulse = document.getElementById("vogar-button-pulse");
  const bookingIframe = document.getElementById("booking-iframe");
  hafnarfjordurButton.addEventListener("click", function () {
    bookingIframe.src = "https://noona.is/heilsunuddonnu/book";
    hafnarfjordurButtonPulse.classList.add("bg-gradient-to-r");
    vogarButtonPulse.classList.remove("bg-gradient-to-r");
  });
  vogarButton.addEventListener("click", function () {
    bookingIframe.src = "https://noona.is/heilsunuddogheilun190vogar/book";
    vogarButtonPulse.classList.add("bg-gradient-to-r");
    hafnarfjordurButtonPulse.classList.remove("bg-gradient-to-r");
  });
});
