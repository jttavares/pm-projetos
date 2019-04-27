
function $(element){
    return document.querySelector(element);
}
const btnVoltar=$('#voltar');
const input=$('#inputField');
const btnSalvar=$('#salvar');

const setup=$('.setupInput');
const minimo=$('#vlEstqMinimo');
const btnAdd=$('.btnMais');
const btnSubt=$('.btnMenos');
const produtos=$('.produtos');
const update=$('.produtosUpdate');
const arrayPDT=$('.arrayProdutos');



window.addEventListener('load',onApperture);
input.addEventListener('keydown',onEdit);
btnAdd.addEventListener('click',onAddStock);
btnSubt.addEventListener('click',onSubtStock);
btnSalvar.addEventListener('click', onSalvar);

function onApperture(){
    btnVoltar.style.width='0%';
    input.style.width='75%';
    setup.style.height='0px';
    setup.style.visibility="hidden";
    produtos.style.visibility='hidden';
    update.style.visibility='hidden';
    produtos.style.height="0px";
    update.style.height="0px";
    
    let array=[];
    if (localStorage.length!==null) {
     array=Array.from(localStorage);
     array.forEach(function (element) {
        for (let index = 0; index <= array.length; index++) {
            const element = array[index];
           
            let itemNome=`${localStorage.length}.${name}`;
            let itemMinimo=`${localStorage.length}.${minimo}`;
            let itemEstoque=`${localStorage.length}.${estoque}`;

            let meuProduto=new Produto();
            meuProduto.name=localStorage.getItem(itemNome);
            meuProduto.minimo=localStorage.getItem(itemMinimo);
            meuProduto.estoque=localStorage.getItem(itemEstoque);
        }
        adicionarItem(meuProduto);
     })  
    }
}


 class Produto{ 
    constructor(name,minimo){
        this._name=name;
        this._minimo=minimo;
        this._estoque=0;
    }
    get name(){
        return this._name;
    }
    get minimo(){
        return this._minimo;
    }
    get estoque(){
        return this._estoque;
    }
    aumentarEstoque(){
        this._estoque++;
    }
    diminuirEstoque(){
        this._estoque--;
    }
}
let arrayProds=[];

function onEdit(){
    setup.style.height="73px";
    setup.style.visibility="visible";
}
function onAddStock() {
    let valor=parseInt(minimo.innerHTML);
    valor++;
    minimo.innerHTML=valor.toString();
    return minimo.innerHTML;
}
function onSubtStock() {
    let valor=parseInt(minimo.innerHTML);
    valor--;
    minimo.innerHTML=valor.toString();
    return minimo.innerHTML;
}
function onSalvar(){
    let newProduto=new Produto(input.value,minimo.innerHTML); 
    let itemNome=`${localStorage.length}.name`;
    let itemMinimo=`${localStorage.length}.minimo`;
    let itemEstoque=`${localStorage.length}.estoque`;

    localStorage.setItem(itemNome,newProduto.name);
   localStorage.setItem(itemMinimo,newProduto.minimo);
   localStorage.setItem(itemEstoque,newProduto.estoque);
   adicionarItem(newProduto);
LimparCampos();
setup.style.height="0px";
setup.style.visibility="hidden";
}
function LimparCampos(){
    input.value="";
    minimo.innerHTML="1";
}
function adicionarItem(produto){
    const divProdutos=document.createElement("DIV");
    const divTextPdt=document.createElement("div");
    const divParagrafoNovoPDT=document.createElement("div");
    const pNovoProduto=document.createElement("p");
    pNovoProduto.innerText=produto.name;
    divParagrafoNovoPDT.appendChild(pNovoProduto);
    divTextPdt.appendChild(divParagrafoNovoPDT)
    divProdutos.appendChild(divTextPdt);

    const divDivMinimo=document.createElement("div");
    const pDivMinimo=document.createElement("p");
    const smallDivMinimo=document.createElement("small");
    smallDivMinimo.innerHTML=produto.minimo;
    pDivMinimo.appendChild(smallDivMinimo);
    divDivMinimo.appendChild(pDivMinimo);
    divProdutos.appendChild(divDivMinimo);

    const h6EstoqueProdutos=document.createElement("h6");
    h6EstoqueProdutos.innerHTML=produto.estoque;
    divProdutos.appendChild(h6EstoqueProdutos);

    divProdutos.style.display="flex";
    divProdutos.style.flexDirection="row";
    divProdutos.style.justifyContent="space-between";
    divProdutos.style.height="72px";
    divProdutos.style.backgroundColor="#ef3e3e";
    divProdutos.style.color="#ffffff";
    divProdutos.style.lineHeight="72px";
    divProdutos.style.paddingLeft="20px";
    divProdutos.style.paddingRight="20px";

    h6EstoqueProdutos.style.fontWeight="400";
    h6EstoqueProdutos.style.fontSize="20px";

    divTextPdt.style.display="flex";
    divTextPdt.style.flexDirection="row";
    divTextPdt.style.justifyContent="flex-start";

    divDivMinimo.style.fontSize="12px";
    divDivMinimo.style.marginLeft="5px";

    arrayPDT.appendChild(divProdutos);
}





