// ===============================
// MENU MOBILE
// ===============================

const menuMobile = document.querySelector(".menu_mobile");
const nav = document.querySelector("nav");

menuMobile.addEventListener("click", () => {
    nav.classList.toggle("ativo");
});

// Fecha o menu quando um link é clicado
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("ativo");
    });
});

// ===============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===============================

const elementos = document.querySelectorAll(".reveal");

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

// ===============================
// GALERIA / MODAL
// ===============================

const cardsImagem = document.querySelectorAll(".imagem-card");
const modal = document.querySelector("#modal");
const imagemModal = document.querySelector("#imagemModal");
const tituloModal = document.querySelector("#tituloModal");
const fecharModal = document.querySelector("#fecharModal");

cardsImagem.forEach((card) => {
    card.addEventListener("click", () => {
        imagemModal.src = card.dataset.imagem;
        imagemModal.alt = card.dataset.titulo;
        tituloModal.textContent = card.dataset.titulo;
        modal.classList.add("ativo");
    });
});

function fechar() {
    modal.classList.remove("ativo");
}

fecharModal.addEventListener("click", fechar);

modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
        fechar();
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        fechar();
    }
});

// ===============================
// ANO AUTOMÁTICO
// ===============================

document.querySelector("#ano").textContent = new Date().getFullYear();
