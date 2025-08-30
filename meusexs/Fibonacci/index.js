let escolha = 5;  // Primeiro número da sequência
let n = 10;       // Quantos números gerar
let meuArray = [escolha, escolha]; // Começa com dois números iguais ao escolhido

for (let i = 2; i < n; i++) {
    meuArray.push(meuArray[i - 1] + meuArray[i - 2]);
}

console.log(meuArray);
