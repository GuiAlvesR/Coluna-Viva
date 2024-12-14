AOS.init();

function p(num, src) {
  const p = document.getElementById(`p${num}`);
  const number = src.querySelector(".faq-number");
  const img = src.querySelector("img");

  if (p.classList.contains("faq-p")) {
    p.classList.remove("faq-p");
    number.classList.remove("faq-number-opacity");
    img.classList.remove("seta");
  } else {
    p.classList.add("faq-p");
    number.classList.add("faq-number-opacity");
    img.classList.add("seta");
  }
}

window.addEventListener("resize", changeAosAnimation);
window.addEventListener("load", changeAosAnimation);

function changeAosAnimation() {
  let aos = document.querySelector(".section-services .content");

  if (window.innerWidth <= 768) {
    aos.removeAttribute("data-aos");
  } else {
    aos.setAttribute("data-aos", "fade-right");
  }

  AOS.refresh();
}

let totalTime = 40 * 60;

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

let timeLeft = localStorage.getItem("timeLeft")
  ? parseInt(localStorage.getItem("timeLeft"))
  : totalTime;

function updateTimer() {
  const timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = formatTime(timeLeft);

  localStorage.setItem("timeLeft", timeLeft);

  if (timeLeft > 0) {
    timeLeft--;
  } else {
    clearInterval(timerInterval);
  }
}
const timerInterval = setInterval(updateTimer, 1000);

updateTimer();

const timerBar = document.getElementById("timer-bar");
const faqsSection = document.querySelector(".section-faqs");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        timerBar.classList.add("visible");
      } else {
        timerBar.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

observer.observe(faqsSection);

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      direction: "vertical",
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      direction: "horizontal",
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      direction: "horizontal",
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
