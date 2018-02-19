

function imcCalculado(){
    
    if(document.getElementById('alturaField').value=="")
    {
        document.getElementById('alturaField').focus();
    }
    else if(document.getElementById('pesoField').value==""){
        document.getElementById('pesoField').focus();
    }
    else{   
    let altura=parseFloat(document.getElementById('alturaField').value.replace(',','.'));
    let peso=parseFloat(document.getElementById('pesoField').value.replace(',','.'));
    const valor=peso/(altura*altura);
   
    if(valor<16){
    styleResposta();
    document.getElementById('txtIndice').innerHTML=valor.toFixed(1).replace('.',',');
    document.getElementById('txtClassificacao').innerHTML="Magreza grave";
}
    else if(valor>=16 && valor<17){
    styleResposta();
    document.getElementById('txtIndice').innerHTML=valor.toFixed(1).replace('.',',');
    document.getElementById('txtClassificacao').innerHTML="Magreza moderada";
}
    else if(valor>=17 && valor<18.5){
    styleResposta();
    document.getElementById('txtIndice').innerHTML=valor.toFixed(1).replace('.',',');
    document.getElementById('txtClassificacao').innerHTML="Magreza Leve";
}
    else if(valor>=18.5 && valor<25){
    styleResposta();
    document.getElementById('txtIndice').innerHTML=valor.toFixed(1).replace('.',',');
    document.getElementById('txtClassificacao').innerHTML="Saudável";
}
else if(valor>=25 && valor<30){
    styleResposta();
    document.getElementById('txtIndice').innerHTML=valor.toFixed(1).replace('.',',');
    document.getElementById('txtClassificacao').innerHTML="Sobrepeso";
    
}
    else if(valor>=30 && valor<35){
    styleResposta();
    document.getElementById('txtIndice').innerHTML=valor.toFixed(1).replace('.',',');
    document.getElementById('txtClassificacao').innerHTML="Obesidade";
}
    else if(valor>=35 && valor<=40){
    styleResposta();
    document.getElementById('txtIndice').innerHTML=valor.toFixed(1).replace('.',',');
    document.getElementById('txtClassificacao').innerHTML="Obesidade Severa";
}
    else{
    styleResposta();
    document.getElementById('txtIndice').innerHTML=valor.toFixed(1).replace('.',',');
    document.getElementById('txtClassificacao').innerHTML="Obesidade Mórbida";
}
}
}
function styleResposta(){
    document.getElementById('btnCalculo').style.visibility="hidden";
    document.getElementById('insideButton').style.visibility='visible';
  /* document.getElementById('btnCalculo').style.backgroundColor="#fff";
   document.getElementById('btnCalculo').style.border='none';
    document.getElementById('btnCalculo').style.boxShadow="none";*/
    document.getElementById('voltar').style.backgroundImage="url('voltar.png')";
    document.getElementById('voltar').style.backgroundRepeat='no-repeat';
    document.getElementById('voltar').style.backgroundSize='cover';
   document.getElementById('txtIndice').style.color='#4a4a4a';
   document.getElementById('txtIndice').style.fontSize='50px';
   document.getElementById('txtIndice').style.fontWeight='300';  
   document.getElementById('txtClassificacao').style.color='#4a4a4a';
   document.getElementById('txtClassificacao').style.fontSize='24px';
   document.getElementById('txtClassificacao').style.fontWeight='300';
   document.getElementById('calcImc').style.backgroundColor='#fff';
  document.getElementById('rCalc').style.backgroundColor='#fff';
    document.getElementById('rCalc').style.boxShadow='none';
   document.getElementById('lCalc').style.backgroundColor='#fff';
    document.getElementById('lCalc').style.boxShadow='none';  
} 

document.getElementById('voltar').addEventListener("click",styleParameters);

function styleParameters(){
    window.location.reload();
}    

