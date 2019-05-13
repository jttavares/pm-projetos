let caracteres, pass, rand, text;
const  result=document.querySelector('p');
const button=document.querySelector('button');

caracteres=[
    "!", "@", "#", "$", "%", "*","_", "-", "+", "/", "\\","|",
                "0", "1", "2", "3", "4", "5","6", "7", "8", "9", 
                "a", "b", "c", "d", "e", "f","g", "h", "i", "j",  "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                "A", "B", "C", "D", "E", "F","G", "H", "I", "J","K", "L", "M", "N","O", "P", "Q", "R", "S", "T","U", "V", "W", "X","Y", "Z"
];



pass= [];

text="";




function generatePass(){
    result.innerHTML="";
    text="";
    for(let i=0; i<12;i++){
    pass[i]=caracteres[Math.floor((Math.random()*74)+1)];
    text+=pass[i];
}
result.innerHTML=text;
}

button.addEventListener('click', generatePass);


