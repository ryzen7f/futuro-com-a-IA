function abrirMenu() {
    const nav = document.querySelector("nav");

    nav.classList.toggle("ativo");
}

const elementos = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    elementos.forEach((elemento) => {

        if (elemento.getBoundingClientRect().top < window.innerHeight) {
            elemento.classList.add("ativo");
        }

    });

});