//while

// let loop=0;
// let cores = ["verde", "vermelho"]
// while( loop < cores.length){
// 	console.log(cores[loop]);
// 	loop++;
// }

// let teste=0;

// do {

// 	teste = Number( prompt("Digite 0 sair"));

// 	switch(teste){
// 		case 1:
// 			alert("Cadastrando");
// 		break;

// 		case 2:
// 			alert("Consultando");
// 		break;

// 		default:
// 			alert("Opção inválida");
// 		break;	

// 	}

// } while( teste != 0)

let frutas = [
{fruta: "Maçã", preco:3.36},
{fruta: "Melão", preco:6.36},
]



function listafrutas(f){

	for( let produto of f){
		for( let p in produto){
			console.log(` ${p} -> ${produto[p]}`)
		}
	}
}

listafrutas(frutas);