let palavra = "socorram me subi no onibus em marrocos ";

// Remove os espaços e converte para minúsculas
let pformatada = palavra.replaceAll(" ", "").toLocaleLowerCase();

// Reverte a string já sem espaços
let reverse = pformatada.split("").reverse().join("");

if (pformatada === reverse) {
    console.log(`A sua frase "${palavra}" é um palíndromo!`);
} else {
    console.log(`A sua frase "${palavra}" não é um palíndromo!`);
}