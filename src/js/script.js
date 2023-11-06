import '../css/common.css';
import '../css/styles.css';
import CardTpl from "../templates/card.hbs";
import Menu from "../js/menu.json";

const CardRef = document.querySelector(".js-menu");
const markup = CardTpl(Menu);

CardRef.insertAdjacentHTML("beforeend", markup);






document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-switch-toggle");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.checked = true;
  } else {
    document.body.classList.add("light-theme");
  }

  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    }
  });
});



