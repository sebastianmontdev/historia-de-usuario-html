window.onload = function() {
    alert("este mensaje fue hecho con javascript");
};

const btnCambiarTexto = document.getElementById("btn-cambiar-texto");
const parrafos = document.querySelectorAll("#sobre-mi p");

btnCambiarTexto.addEventListener("click", () => {
    parrafos[0].textContent = "Este texto fue cambiado con JavaScript ";
});

const btnToggleProyectos = document.getElementById("btn-toggle-proyectos");
const listaProyectos = document.querySelector("#proyectos ul");

btnToggleProyectos.addEventListener("click", () => {
    if (listaProyectos.style.display === "none") {
        listaProyectos.style.display = "block";
    } else {
        listaProyectos.style.display = "none";
    }
});
