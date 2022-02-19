// Import stylesheets
import './style.css';

//Comentando com múltiplas linhas
/*Várias linhas
de comentário*/

//Declaração de constantes
const myVar1: number = 42;
const myVar2: number = 42;
//Declaração de variáveis
let myVar3 = 42;
let myVar4: number = 42;
let myVar5: string = "Olá";

let mySentence: string = `

blablabla blablabla
blablabla blablabla

`;

//Utilizando o console
console.log("Olá, mundo!")

//Utilizando laços de repetição
for(let i=1;i<=10; i++){
  console.log(i);
}

//Utilizando condicionais
if (myVar1 % 2 == 0){
  console.log(myVar1 + " é PAR");
}else{
  console.log(myVar1 + " é IMPAR");
}

//Utilizando laços e condicionais
for(let i=1;i<=10; i++){
  if (i % 2 == 0){
    console.log(i);
  }
}

let title: string = "Olá, mundo!";
let paragraph: string = "BlaBlaBla"
  

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>${title}</h1>
<p>${paragraph}</h1>
`;


