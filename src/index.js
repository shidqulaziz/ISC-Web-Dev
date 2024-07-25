// function scrollToSection(sectionId) {
//   document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
// }

// document.getElementById("menu-btn").addEventListener("click", function () {
//   const menu = document.getElementById("mobile-menu");
//   menu.classList.toggle("hidden");
// });

// function toggleMenu() {
//   const menu = document.getElementById("mobile-menu");
//   menu.classList.add("hidden");
// }

document.getElementById("menu-btn").addEventListener("click", toggleMenu);

function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
