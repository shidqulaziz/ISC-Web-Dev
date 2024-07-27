function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

document.getElementById("menu-btn").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

document.querySelectorAll("#mobile-menu a").forEach((anchor) => {
  anchor.addEventListener("click", function () {
    toggleMenu(); // Hide the menu when an item is clicked
  });
});

// service tombol
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("#service-carousel .flex");
  const prevBtn = document.getElementById("prev-service");
  const nextBtn = document.getElementById("next-service");
  const items = Array.from(carousel.children);
  const itemCount = items.length;
  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < itemCount - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  updateCarousel();
});

// News carousel control
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("#news .scroll-x");
  const prevBtn = document.getElementById("prev-news");
  const nextBtn = document.getElementById("next-news");

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: -carousel.offsetWidth,
      behavior: "smooth",
    });
  });

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: carousel.offsetWidth,
      behavior: "smooth",
    });
  });
});

// effect blur
document.addEventListener("scroll", function () {
  const homeSection = document.getElementById("home");
  const aboutSection = document.getElementById("about");
  const blurEffect = document.getElementById("blur-effect");

  const homeRect = homeSection.getBoundingClientRect();
  const aboutRect = aboutSection.getBoundingClientRect();

  if (aboutRect.top < window.innerHeight && aboutRect.bottom > 0) {
    blurEffect.classList.add("opacity-50");
  } else {
    blurEffect.classList.remove("opacity-50");
  }
});

function toggleAccordion(contentId) {
  const content = document.getElementById(contentId);
  const isVisible = !content.classList.contains("hidden");

  // Toggle the clicked content
  if (isVisible) {
    content.classList.add("hidden");
  } else {
    content.classList.remove("hidden");
  }
}
