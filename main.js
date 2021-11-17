const menuBtn = document.querySelector(".menu-btn");
const navLinksMobile = document.querySelector(".nav-links-mobile");
const bodyOverflow = document.querySelector("body");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navLinksMobile.classList.add("open");
    bodyOverflow.style.overflow = "hidden";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navLinksMobile.classList.remove("open");
    bodyOverflow.style.overflow = "auto";
    menuOpen = false;
  }
});
