// (function() {
    
    // Adicione sua implementação aqui...
    // Tem total liberdade de alterar o documento HTML, CSS e JS.

let btn = document.querySelector(".l-sidebar__btn");
let sidebar = document.querySelector(".l-sidebar");
let body = document.querySelector("body");

//    1. **(20pts)** Esta sessão deverá ser apresentada sempre que houver o click no **botão Menu**: `<button class="l-sidebar__btn"type="button">Menu</button>`.

//     1.1. Quando houver o click do usuário, a sidebar deverá ser apresentada: `<div class="l-sidebar">`

function exibirSidebar(e) {
  sidebar.classList.add("l-sidebar--open");
  console.log(e);
}

btn.addEventListener("click", exibirSidebar);



// })();