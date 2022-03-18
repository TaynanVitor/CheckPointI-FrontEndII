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

// 2. **(20pts)** O usuário poderá usar o teclado para abrir ou fechar a sidebar. No caso, as tecla `Space`

function exibirSidebarComSpace(e) {
  if (e.code == "Space") {
    sidebar.classList.toggle("l-sidebar--open");
  }
}

body.addEventListener("keydown", exibirSidebarComSpace);


// 3. **(20pts)** O usuário poderá usar o mouse para abrir ou fechar a sidebar. No caso, um duplo click em qualquer local do site irá abrir ou fechar a sidebar.

function exibirSidebarComDbl() {
  sidebar.classList.toggle("l-sidebar--open");
}

body.addEventListener("dblclick", exibirSidebarComDbl);