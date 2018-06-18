const divida=$('#txtDivida');
const prazo=$('#txtPrazo');
const parcela=$('#txtPrestacao');
const negativo=$('#txtNegativo');
const btn=$('button');
const texto=$('#resultado');

//Eventos


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
        taxa=((((valorParcela*valorPrazo)/valorDivida)-1)*100);
        texto.innerHTML=`A taxa deve ser de ${taxa.toLocaleString("pt-br")}%`;

}