// Gentle reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .detail-card, .photo, .rsvp-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
// Sophie & Subash engagement countdown
const eventDate = new Date("2026-12-05T12:00:00+11:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance <= 0) {
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
// Detect Messenger's in-app browser
const appleCalendarButton = document.getElementById("appleCalendarButton");
const messengerCalendarHelp = document.getElementById("messengerCalendarHelp");
const openBrowserButton = document.getElementById("openBrowserButton");

const userAgent = navigator.userAgent || navigator.vendor || "";
const isMessenger = /FBAN|FBAV|FB_IAB|Messenger/i.test(userAgent);

if (isMessenger) {
  appleCalendarButton.addEventListener("click", function (event) {
    event.preventDefault();

    messengerCalendarHelp.hidden = false;

    messengerCalendarHelp.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
}

openBrowserButton.addEventListener("click", function () {
  /*
   * Messenger may not allow a webpage to force Safari/Chrome.
   * This attempts to leave the in-app browser where supported.
   */
  window.open(window.location.href, "_blank");
});
