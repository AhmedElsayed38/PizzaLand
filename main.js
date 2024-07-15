const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds
    disableOnInteraction: false, // Keep autoplay running after interactions
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});

const btns = document.querySelectorAll(".buttons > div");

btns.forEach((btn) => {
  btn.classList.remove("active")
  btn.addEventListener("click", () => {
    // Remove "active" class from all buttons
    btns.forEach((otherBtn) => otherBtn.classList.remove("active"));

    // Add "active" class to the clicked button
    btn.classList.add("active");
  });
});
