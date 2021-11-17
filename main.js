const menuBtn = document.querySelector(".menu-btn");
const navLinksMobile = document.querySelector(".nav-links-mobile");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navLinksMobile.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navLinksMobile.classList.remove("open");
    menuOpen = false;
  }
});
