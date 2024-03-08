let botao = document.querySelector("#botao");
botao.style.background="blue";
let contaCliques = 0;
let estaQuebrado=false;

botao.addEventListener("mouseover",trocaVerde);

function trocaVerde(){
    if(!estaQuebrado)
       botao.style.background="green";
}

botao.addEventListener("mouseout",trocaAzul);

function trocaAzul(){
  if(!estaQuebrado)
    botao.style.background="blue";
}

botao.addEventListener("click",trocaVermelho);

function trocaVermelho(){
    contaCliques++;
    if(contaCliques >=10){
       botao.style.background="red";
       botao.innerHTML="Quebrei";
       estaQuebrado=true;
    }
}