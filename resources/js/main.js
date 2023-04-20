let Navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let scrolled = window.scrollY;
  if (scrolled > 30) {
    Navbar.classList.add("stick-top");
  } else {
    Navbar.classList.remove("stick-top");
  }
});
