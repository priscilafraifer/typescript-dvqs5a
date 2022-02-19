// Import stylesheets
import { Greeter } from './greeter';
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
let myVar5: string = 'Olá';

let mySentence: string = `

blablabla blablabla
blablabla blablabla

`;

//Utilizando o console
console.log('Olá, mundo!');

//Declarando arrays
let list: number[] = [21, 2, 65, 55, 10, 98, 3, 9, 80, 42];

//Utilizando laços de repetição
console.log('Laço');
for (let i = 1; i <= 10; i++) {
  console.log(list[i]);
}

//Utilizando condicionais
if (myVar1 % 2 == 0) {
  console.log(myVar1 + ' é PAR');
} else {
  console.log(myVar1 + ' é IMPAR');
}

//Utilizando laços e condicionais
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Declarando tipos enumerados

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
enum ColorWithReferences {
  Red = 1,
  Green = 2,
  Blue = 3,
}
let c2: ColorWithReferences = ColorWithReferences.Green;

//Declarando any

let notSure: any = 42;
notSure = 'Maybe a string instead';
notSure = false; //definitivamente, é booleano

//Declarando Void
function aviso(): void {
  console.log('Mensagem de alerta');
}
aviso();

//Declarando funções
function soma(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(soma(21, 21));
console.log(soma(1, 2));

function getFullName(pessoa: { name: string; lastname: string }): string {
  return pessoa.name + ' ' + pessoa.lastname;
}
let p = { name: 'Ricardo', lastname: 'Larguesa' };
console.log(getFullName(p));


let counter = 0;
let intevalId = setInterval(() => {
  counter += 1;
  const counterDiv: HTMLElement = document.getElementById('counterDiv');
  counterDiv.innerHTML = 'Contador: ' + counter;
}, 1000);

//Utilizando classe externa

let saudacao = new Greeter("Mundo");


let title: string = "Olá, mundo!";
let paragraph: string = "BlaBlaBla";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>${title}</h1>
<p>${paragraph}</h1>
<div id ='counterDiv'></div>
<hr>
<button id='appButton' onclick="alertTsMethod()">Alertar</button>
<hr>
<div>${saudacao.getGreeting()}</div>
`;

//Declarando uma função para ser invocada por um evento
const btn = document.getElementById("appButton");
btn?.addEventListener("click", alertTsMethod);
function alertTsMethod(this: HTMLElement, ev: Event){
  alert("Alertando em typescript");
}