 let str = `Qualquer conteudo!`;

 let str2= `Uma outra string ${str}`;

// let str = "Qualquer conteudo!";
// let str2= "Uma outra string " + str;

console.log(str2);

//Array ama colecao de dados. 

// O array é constituido por elementos
const frutas = ["Uva", "Banana", "Laranja", "Melancia"];//4

let euGosto =`Eu gosto de ${frutas[0]}`;

//console.log(euGosto);// uva

// console.log(frutas[0]);// uva
// console.log(frutas[1]);// Banana
// console.log(frutas[2]);// Laranja
// console.log(frutas[3]);// melancia

const Pessoa = [
	"José", // 0
	23, // 1 
	"Solteiro", // 2
	"Bola", // 3
	1.70, // 4
	cores = ["azul", "preto", "vermelho", "salmão", "ocre"] // 5
];
let key = 5;

key++; // 4

console.log(Pessoa[5][key]); //array bidimensional

// (function(p){
// const jose = `Meu nome é ${Pessoa[0]} eu tenho ${Pessoa[1]} anos e eu sou ${Pessoa[2]} tambem gosto de jogar ${Pessoa[3]}. Minha altura é de ${Pessoa[4]}`;
// document.write(jose);
// })(Pessoa)

