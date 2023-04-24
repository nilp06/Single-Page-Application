let home = document.querySelector("#home-button");
let about = document.querySelector("#about-button");
let careers = document.querySelector("#careers-button");

let home_section = document.querySelector("#home-section");
let about_section = document.querySelector("#about-section");
let careers_section = document.querySelector("#careers-section");

let current_active_button = home;
home.addEventListener("click", function () {
  let coords = home_section.getBoundingClientRect();
  console.log(window.scrollY);
  scrollTo(0, window.scrollY + coords.y);
  if (current_active_button != home) {
    current_active_button.classList.toggle("active");
    current_active_button = home;
    current_active_button.classList.toggle("active");
  }
});
about.addEventListener("click", function () {
  let coords = about_section.getBoundingClientRect();
  scrollTo(0, window.scrollY + coords.y);
  if (current_active_button != about) {
    current_active_button.classList.toggle("active");
    current_active_button = about;
    current_active_button.classList.toggle("active");
  }
});
careers.addEventListener("click", function () {
  let coords = careers_section.getBoundingClientRect();
  scrollTo(0, window.scrollY + coords.y);
  if (current_active_button != careers) {
    current_active_button.classList.toggle("active");
    current_active_button = careers;
    current_active_button.classList.toggle("active");
  }
});
