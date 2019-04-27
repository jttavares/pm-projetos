var InserirProduto={};
InserirProduto.AbrirEdicao=onOpenSetupInput();
InserirProduto.Adicionar=onAddMinimum(meuProduto);
InserirProduto.Diminuir=onSubtMinimum(meuProduto);
InserirProduto.Salvar=onSalvarProduto(meuProduto);

module.exports=InserirProduto;
var btnVoltar=$('#voltar');
var pdt=$("#inputField");
var btnSalvar=$('#salvar');

var paneSetupInput=$(".setupInput");
var valorMinimo=$('#vlEstqMinimo');
var addPdt=$('.btnMais');
var  subtPdt=$('.btnMenos');
var arrayP=$('.arrayProdutos');
//inserrir produto

//abrir setupInput se inputField for diferente de null;
//pdt.value.addEventListener('keydown',onOpenSetupInput);
//document.addEventListener('load',onCarregar);
addPdt.addEventListener('click',onAddMinimum);
subtPdt.addEventListener('click',onSubtMinimum);
btnSalvar.addEventListener('click',onSalvarProduto);


function onOpenSetupInput(){
    paneSetupInput.style.visibility='visible';
}
function onAddMinimum(meuProduto){
    valorMinimo++;
    meuProduto.minimo=valorMinimo;
}
function    onSubtMinimum(meuProduto){
     valorMinimo--;
      meuProduto.minimo=valorMinimo;
}
function onSalvarProduto(meuProduto){
    Salvar(meuProduto);
}

//pegar valor no inputField e criar um novo produto