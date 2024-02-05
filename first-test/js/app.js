const toggle_button = document.querySelector(".toggle-button");
const navBarLinks = document.querySelector(".links");

toggle_button.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});