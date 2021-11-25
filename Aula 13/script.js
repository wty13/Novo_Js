// let i=2; // var gloval
// for(let x=0; x<10; x++){
// 	console.log(`O valor da interação é ${x} o x mais ele mesmo ${i++}`);
// }

// let Pessoas = {
// 	nome: "Steven Roger",
// 	Idade:90,
// 	heroi:"Capitão América",
// }

// for(let propriedades in Pessoas){
// 	console.log(Pessoas.nome);
// }

// arr = ["nome"=>"Marcelo"]
// arr[nome]

// let frutas = ["Melancia", "Manga", "Banana", "Uva"];

// for(let nomeFruta of frutas){
// 	console.log(nomeFruta);
// }

// for(let x=0; x<frutas.length; x++){
// 	console.log(`O nome da fruta é ${frutas[x]}`);
// }

let Herois = [
{
	identidadeSecreta: "Steven Roger", // 0
	heroi: "Capitão America",
},
{
	identidadeSecreta: "Tony Stark", // 1
	heroi: "Homen de Ferro",
}

];

Herois.push({identidadeSecreta:"Diana", heroi:"Mulher Maravilha"});
Herois.push({identidadeSecreta:"Bruce bener", heroi:"Hulk"});

// let marvel = Herois[0].identidadeSecreta;
// console.log(marvel);

for(let marvel of Herois){
	//console.log(marvel);
	for(let m in marvel){
		console.log(`${m} -> ${marvel[m]}`)
	}
}