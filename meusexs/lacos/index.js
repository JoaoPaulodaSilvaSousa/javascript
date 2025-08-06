// let i = 0;
// while(i<10) {
//     console.log(i);
//     i++;
// }


// let i = 0;
// do {
//     console.log(i)
//     i++;
// } while (i<10);

// let resposta = '';
// do {
//      resposta = window.prompt('Você é maior de idade?')
// } while(resposta.toLowerCase() != 'sim');

// for(let i = 0; i<10; i++) {
//     console.log(i)
// }

// ['a', 'b'].forEach(function(item) {
//    console.log(item);
// }) 

let ul = document.querySelector('#tabuada');
let numero = window.prompt('Digite um número para ver a tabuada');

// let i = 1;
// while(i<=10) {
//    let resultado = numero * i;
//    console.log(resultado);
//    exibirnoHTML(numero, i, resultado);
//    i++;
// }

// let i = 1;
//  do {
//    let resultado = numero * i;
//    console.log(resultado);
//    exibirnoHTML(numero, i, resultado);
//    i++;
// } while(i<=10);

// for (let i = 1; i <= 10; i++) {
//    let resultado = numero * i;
//    console.log(resultado);
//    exibirnoHTML(numero, i, resultado);
//    i++;
// }


let numerosTabuadas = [];
for(let i=1; i<= 10; i++) {
   numerosTabuadas.push(i);
}

numerosTabuadas.forEach(function(n) {
   let resultado = numero * n;
   console.log(resultado);
   exibirnoHTML(numero, n, resultado);
})

function exibirnoHTML(numero, i, resultado) {
   let li = document.createElement('li');
   li.innerText = `${numero} * ${i} = ${resultado}`;
   ul.appendChild(li);
}

