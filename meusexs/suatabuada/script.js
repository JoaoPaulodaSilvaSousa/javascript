function calc() {
    let valor1 = document.getElementById('tabuada1').value.trim() // trim  é um método de string que remove os espaços em branco do início e do fim de um texto. Um método é uma função que pertence a um objeto. Ou seja, é uma ação que você pode fazer com um objeto.

    let valor2 = document.getElementById('tabuada2').value.trim()
    let num1 = Number(valor1) // tranforma em número
    let num2 = Number(valor2)
    let res = document.getElementById('resultado')

    if (valor1 !== "" && valor2 !== "" && !isNaN(num1) && !isNaN(num2)) {
        // !isNaN = só entra aqui se os dois valores forem números válidos
        // valor1 !== "" garante que o campo não está vazio

        let multiplicacao = num1 * num2

        res.innerHTML = `Resultado: ${num1 * num2}`

        let resultadotabuada = `<h3>Tabuada do ${num1} até o 10: </h3>`
        
        resultadotabuada += '<ul>' //O operador += significa: "adicione essa parte à string que já existe". Resumo rápido:x += y é igual a x = x + y. Para strings, junta textos .Para números, soma valores
        for ( let i = 1; i <= 10; i++) {
            resultadotabuada += `<li>${num1} x ${i} = ${num1 * i}</li>`
        }
        resultadotabuada += `</u> <input class="limpar" type="button" value="Limpar" onclick="limpe()">`

        res.innerHTML = `<p>Resultado da multiplicação: ${num1} x ${num2} = ${multiplicacao}</p> ${resultadotabuada}`

    } else {
        res.innerHTML = "Por favor, insira dois números válidos."
    }

}

document.addEventListener("DOMContentLoaded", () => { //A sintaxe é: objeto.addEventListener('nomeDoEvento', funçãoQueVaiExecutar); Esse evento é disparado quando o navegador terminou de carregar todo o HTML da página e construiu o DOM (Document Object Model). É uma arrow function — uma forma curta e moderna de escrever uma função anônima. Essa função é o callback que será executado assim que o evento "DOMContentLoaded" acontecer.
    // Função que será chamada ao apertar Enter
    const teclaEnter = (event) => {
        if (event.key === 'Enter') {
            calc();
        }
    };

    // Pega os inputs e adiciona o listener para detectar Enter
    const inputs = ['tabuada1', 'tabuada2'];
    inputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('keydown', teclaEnter);
        }
    });
});

function mais() {
      let opc = document.getElementById('mais');
      let res2 = document.getElementById('opcres')
      let limpartabu = document.getElementById('criador');

      if (res2.innerHTML.trim() === "") {
        // Mostra os elementos adicionais
        res2.innerHTML = `
            <p>Deseja que a sua tabuada vá até qual?</p>
            <input type="number" name="tabuada2" id="contagem">
            <input type="button" value="Calcular" onclick="calctabu()"> <br>
        `;
        opc.value = "Menos opções!"; // muda o texto do botão para "x"

        setTimeout(() => { // setTimeout é uma função do JavaScript usada para adiar a execução de um bloco de código. Para esperar a criação do input antes de tentar acessá-lo com getElementById. 0 no fim da função é o tempo de execução.
            const campo = document.getElementById('contagem');
            campo.addEventListener('keydown', function(event) { //element.addEventListener(tipoEvento, funçãoCallback); É uma função anônima (sem nome) que é passada como argumento para outro método — neste caso, para o método addEventListener. Função: é um bloco de código que pode ser executado. Anônima: não tem nome, é declarada “na hora” e usada imediatamente. Parâmetro event: representa o objeto que contém informações sobre o evento que aconteceu.
                if (event.key === 'Enter') {
                    calctabu();
                }
            });
        }, 0);
        
    } else {
        // Oculta os elementos
        res2.innerHTML = "";
        limpartabu.innerHTML = ""; // limpa o resultado personalizado também
        opc.value = "Mais opções!"; // volta o botão para "+"
    }
}

    function calctabu() {
    let contador = Number(document.getElementById('contagem').value);
    let res3 = document.getElementById('criador');
    let gerador = Number(document.getElementById('tabuada1').value);

    if ( gerador && contador && contador > 0) {
        let resultado = `<h3>Tabuada personalizada de ${gerador} até ${contador}:</h3><ul>`;
        for (let i = 1; i <= contador; i++) {
            resultado += `<li>${gerador} x ${i} = ${gerador * i}</li>`;
        }
        resultado += `</ul> <input class="limpar" type="button" value="Limpar" onclick="limpe()">`;
        res3.innerHTML = resultado;
    } else {
        res3.innerHTML = "<p>Insira um número válido para a tabuada.</p>";
    }
}

function limpe() {
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('opcres').innerHTML = "";



}