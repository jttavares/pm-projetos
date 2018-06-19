const divida=$('#txtDivida');
const prazo=$('#txtPrazo');
const parcela=$('#txtPrestacao');
const negativo=$('#txtNegativo');
const btnCalculo=$('#calculo');
const btnLimpar=$("#clear");
const texto=$('#resultado');
//const inputs=document.querySelectorAll('input');

//Eventos
btnCalculo.addEventListener("click",onClickCalculo);

btnLimpar.addEventListener("click",onClickClear);

function $(element){
    return document.querySelector(element);
}



function onClickCalculo(){
    let valorDivida=divida.value;
    let valorPrazo=prazo.value;
    let valorParcela=parcela.value;
    let valorNegativo=negativo.value;
    
    
        //montante= prestacao*taxa*prazo
       //taxa=((parcelaDesejada-negativo)*prazo)/divida
        taxa=((((valorParcela*valorPrazo)/valorDivida)-1)*100)/valorPrazo;
        texto.innerHTML=`A taxa mensal deve ser de ${taxa.toLocaleString("pt-br")}% a.m`;

}
function onClickClear(){
    divida.value="";
    prazo.value="";
    parcela.value="";
    negativo.value="";
    texto.innerHTML="";
}
