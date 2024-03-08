let titulo = document.querySelector(".tituloprincipal");

titulo.addEventListener("mouseover",mudaVinho);
titulo.addEventListener("mouseout",mudaBranco);

function mudaVinho(){
    titulo.style.background="red";
}
function mudaBranco(){
    titulo.style.background="white";
}