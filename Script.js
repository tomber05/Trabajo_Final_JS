// MENÚ DESPLEGABLE

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

// FECHA ACTUAL

const fecha = document.getElementById("fecha");

const hoy = new Date();

fecha.textContent = "Fecha: " + hoy.toLocaleDateString("es-ES");

// CAMBIAR TEMA

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// CONTADOR DE VISITAS

let visitas = localStorage.getItem("visitas");

if (visitas === null) {
  visitas = 0;
}

visitas++;

localStorage.setItem("visitas", visitas);

document.getElementById("visitas").textContent = "Visitas al blog: " + visitas;

// BUSCADOR DE ARTÍCULOS

const buscador = document.getElementById("buscador");

buscador.addEventListener("keyup", () => {
  const texto = buscador.value.toLowerCase();

  const posts = document.querySelectorAll(".post");

  posts.forEach((post) => {
    if (post.textContent.toLowerCase().includes(texto)) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
});

// BOTÓN VOLVER ARRIBA

const arriba = document.getElementById("arriba");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    arriba.style.display = "block";
  } else {
    arriba.style.display = "none";
  }
});

arriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
