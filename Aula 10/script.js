// let nome = "Marcelo da Silva";

// //console.log( nome.match('M') );

// console.log( nome.search(/m/i) );
// console.log(nome[0]);

// let str =`Lorem ipsum dolor sit amet consectetur 
// adipisicing elit. Pariatur voluptate quo ea recusandae 
// est, illum quos sunt excepturi. Deserunt, enim. Aliquam 
// accusantium, et porro, velit ipsam voluptatem beatae nam 
// doloremque.`;

// let strOutra = str.replace(/sit/gi,'não');

// console.log(strOutra);

// let gato = "gato";
// let outroGato = "gato";

// console.log(gato.localeCompare(/Gato/gi));

// let num = Number('10');

// console.log(num.toString());

// let str =`Lorem ipsum dolor sit amet consectetur 
// adipisicing elit. Pariatur voluptate quo ea recusandae 
// est, illum quos sunt excepturi. Deserunt, enim. Aliquam 
// accusantium, et porro, velit ipsam voluptatem beatae nam 
// doloremque.`;

// console.log(str.toLowerCase());

// let gato = "gato";
// let outroGato = "GATO";

// let cat1 = gato.toLowerCase();
// let cat2 = outroGato.toLowerCase();

// console.log(cat1.localeCompare(cat2));

// let str =`Lorem ipsum dolor sit amet consectetur 
// adipisicing elit. Pariatur voluptate quo ea recusandae 
// est, illum quos sunt excepturi. Deserunt, enim. Aliquam 
// accusantium, et porro, velit ipsam voluptatem beatae nam 
// doloremque.`;

// console.log( str.toUpperCase());

// let str1 =`            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptate quo ea recusandae est, illum quos sunt excepturi. Deserunt, enim. Aliquam 
// accusantium, et porro, velit ipsam voluptatem beatae nam doloremque.`;

// console.log(str1.trim());

// let str2 =`        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptate quo ea recusandae est, illum quos sunt excepturi. Deserunt, enim. Aliquam accusantium, et porro, velit ipsam voluptatem beatae nam doloremque.`;

// console.log(str2);

// let num =Number('1');
// console.log(isNaN('81'));

// if(isNaN(num)){
// 	console.log("Isto não é um número");
// } else {
// 	console.log("Isto é um número");
// }

let valor = 2.456;
console.log(valor.toFixed(1));

console.log(valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));