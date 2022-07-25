let caracteres, pass, rand, text;
const  result=document.querySelector('p');
const button=document.querySelector('button');
const inputNumbers = document.getElementById('numbers');
const inputStrings = document.getElementById('strings');
const inputSymbols = document.getElementById('symbols');

const inputQtde = document.getElementById('quantidade');

const numbersCollection = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9"];

const stringsCollection = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j",  "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
"A", "B", "C", "D", "E", "F","G", "H", "I", "J","K", "L", "M", "N","O", "P", "Q", "R", "S", "T","U", "V", "W", "X","Y", "Z"];
const symbolsCollections =["!", "@", "#", "$", "%", "*","_", "-", "+", "/", "\\","|"];

caracteres=[];



pass= [];

text="";




function generatePass(){
    result.innerHTML="";
    text="";
    if(inputNumbers.checked){
        caracteres = [...numbersCollection];
    }

    if(inputStrings.checked){
        caracteres = [...caracteres,...stringsCollection];
    }

    if(inputSymbols.checked){
        caracteres = [...caracteres,...symbolsCollections];
    }
    
    let qtde = parseInt(inputQtde.value);
    for(let i=0; i < qtde;i++){
    pass[i]=caracteres[Math.floor((Math.random()*caracteres.length))];
    text+=pass[i];
}
result.innerHTML=text;
}

button.addEventListener('click', generatePass);


