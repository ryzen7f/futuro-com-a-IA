// MENU MOBILE botão que torna a nav bar visivel novamente nav.ativo

const menuMobile = document.querySelector(".menu_mobile");
const nav = document.querySelector("nav"); //selecioando items

menuMobile.addEventListener("click", () => { // muda para nav.ativo no click
    nav.classList.toggle("ativo");
});

// Fecha quando é clicado nav
document.querySelectorAll("nav a").forEach((link) => {  
    link.addEventListener("click", () => {
        nav.classList.remove("ativo"); //remove o .ativo do nav
    });
});

//ANIMAÇÃO ADICIONADA AO ROLAR A PAGINA revel.ativo

const elementos = document.querySelectorAll(".reveal"); //selecioando item 

function mostrarElementos() {
    elementos.forEach((elemento) => {
        const posicao = elemento.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 80) {
            elemento.classList.add("ativo");
        }
    });
}

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);
