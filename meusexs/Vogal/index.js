let palavra = "Peixe";
let contadorDeVogais = 0;
let vogais = "aeiou";

let palavraMinuscula = palavra.toLowerCase();

for ( let i = 0; i < palavra.length; i++) {
    let letra = palavraMinuscula[i];

    if (vogais.includes(letra)) {
        contadorDeVogais++;
    }
}
console.log(`A palavra "${palavra}" tem ${contadorDeVogais} vogais.`);