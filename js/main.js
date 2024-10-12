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

  AOS.init();
}
