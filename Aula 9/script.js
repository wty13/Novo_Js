// let nomes= ["Marcelo", "Suelen", "Raphel", "Voce", "nos todos"];
// let nomes2= ["Pedro", "Paulo", "Maria", "Samanta"];

// let todosOsNomes = nomes.concat(nomes2);

// console.log(nomes);
// console.log(nomes2);
// console.log(todosOsNomes);
// let qtArrayNome = `O array nomes possui ${nomes.length} elementos`;
// console.log(qtArrayNome);

            //0       1        2        3
// let nomes2= ["Pedro", "Paulo", "Maria", "Samanta"];

// let buscaNome="Paulo";

// if(nomes2.indexOf(buscaNome) != (-1)){
// 	alert(`Eu encontrei o nome ${buscaNome} e está  na posicao ${nomes2.indexOf(buscaNome)}`);	
// } else{
// 	alert(`Não enconreo o ${buscaNome}`);
// }

// let nomes2= ["Pedro", "Paulo", "Maria", "Samanta"];

// console.log(nomes2);
// console.log(nomes2.join())

// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// 	// frutas.push("Maçã", "Laranja");
// 	// frutas.push("Laranja");
// 	// console.log( frutas.indexOf("Jaca"));

// 	let insertFruta = "Melancia";

// 	if(frutas.indexOf(insertFruta) == -1){
// 		console.log(`A fruta ${insertFruta} não está na lista`);
// 	}else{
// 		console.log(`A fruta ${insertFruta} ja esta na lista`);
// 	}

// 	console.log(frutas);

// 	frutas.pop();
// 	console.log(frutas);

// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// frutas.reverse();

// console.log(frutas);

// console.log(frutas[0]);

// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// frutas.shift();
// console.log(frutas);

// let numeros = ['200', '2', '1', '189', '17'];
// let alfa = ['n', 'p', 'c', 'a', 'b', 'j']
// alfa.sort();
// numeros.sort();
// console.log(alfa);
// console.log(numeros);

// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// console.log( frutas.toString());

let nomes = ["Mariana", "Patati Patata", "Xuxa", "Balao magico"];

let indice = nomes.indexOf("Balao magico");
let novaLista = nomes.splice(indice,1);
console.log(novaLista);