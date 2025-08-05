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

let i = 1;
while(i<=10) {
   let resultado = numero * i;
   console.log(resultado);
   exibirnoHTML(numero, i, resultado)
   i++;
}

function exibirnoHTML(numero, i, resultado) {
   ul.innerHTML = '';
   let li = document.createElement('li');
   li.innerText = `${numero} * ${i} = ${resultado}`;
   ul.appendChild(li);
}
 
