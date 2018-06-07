const titulo=$(".main h1");
const paragrafo=$(".main p");
let color="";

const botoes=document.querySelectorAll('button');

botoes.forEach(function botaoClicado(btn) {
    btn.style.backgroundColor=btn.innerHTML;
   btn.addEventListener("click", onClickColorButton)
})


function $(element) {
    return document.querySelector(element);
}


function personalizar(cor){
    titulo.style.backgroundColor=cor;
    paragrafo.style.backgroundColor=cor;
    if(cor=="red"||cor=="blue"||cor=="green"
    ||cor=="black"||cor=="slateblue"||cor=="royalblue"){
        titulo.style.color="white";
    paragrafo.style.color="white";
    }else{
        titulo.style.color="black";
    paragrafo.style.color="black";
    }
}

function onClickColorButton(event){
    color=event.target.innerHTML;
    personalizar(color);
}



