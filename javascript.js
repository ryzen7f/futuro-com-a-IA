// MENU MOBILE botão que torna a nav bar visivel novamente nav.ativo

const menuMobile = document.querySelector(".menu_mobile"); //seleciona a classe
const nav = document.querySelector("nav"); //seleciona o <nav>

menuMobile.addEventListener("click", () => { // adiciona uma ação no click
    nav.classList.toggle("ativo"); //ação: remover e colocar .ativo no <nav>
});

// Fecha o menu mobile quando algum link é clicado
document.querySelectorAll("nav a").forEach((link) => { //seleciona todos os <a> 
    link.addEventListener("click", () => { //adiciona ação pro click
        nav.classList.remove("ativo"); //remove o .ativo do <nav> assimo fechando
    });
});

//ANIMAÇÃO ADICIONADA AO ROLAR A PAGINA revel.ativo

const elementos = document.querySelectorAll(".reveal"); //seleciona os items .reveal

function mostrarElementos() { //função pra verificar items visiveis
    elementos.forEach((elemento) => { //percorre os elmentos selecionados anteriormente
        const posicao = elemento.getBoundingClientRect().top; // mede a distancia do elemento pro topo da janela

        if (posicao < window.innerHeight - 80) { //verifica se o item esta proximo da area visivel
            elemento.classList.add("ativo"); //adiciona a classe .ativo para ativar a animação
        }
    });
}

window.addEventListener("scroll", mostrarElementos); //executa a função quando rola a pagina
window.addEventListener("load", mostrarElementos); //executa a função quando o site carregar
