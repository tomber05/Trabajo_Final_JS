const boton = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

boton.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
