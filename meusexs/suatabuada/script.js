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

        let resultadotabuada = `<h3>Tabuada do ${num1}: </h3>`
        
        resultadotabuada += '<ul>' //O operador += significa: "adicione essa parte à string que já existe". Resumo rápido:x += y é igual a x = x + y. Para strings, junta textos .Para números, soma valores
        for ( let i = 1; i <= 10; i++) {
            resultadotabuada += `<li>${num1} x ${i} = ${num1 * i}</li>`
        }
        resultadotabuada += "</ul>"

        res.innerHTML = `<p>Resultado da multiplicação: ${num1} x ${num2} = ${multiplicacao}</p>` + resultadotabuada

    } else {
        res.innerHTML = "Por favor, insira dois números válidos."
    }

}

function mais() {
      let opc = document.getElementById('mais');
      let res2 = document.getElementById('opcres')

      res2.innerHTML += '<p>Deseja que a sua tabauda vá até qual?</p> <input type="number" name="tabuada2" id="contagem"> <input type="button" value="Calcular" onclick="calctabu()">';
    }

    function calctabu() {
    let contador = Number(document.getElementById('contagem').value);
    let res3 = document.getElementById('criador');
    let gerador = Number(document.getElementById('tabuada1').value);

    if (!isNaN(gerador) && !isNaN(contador) && contador > 0) {
        let resultado = `<h3>Tabuada personalizada de ${gerador} até ${contador}</h3><ul>`;
        for (let i = 1; i <= contador; i++) {
            resultado += `<li>${gerador} x ${i} = ${gerador * i}</li>`;
        }
        resultado += "</ul>";
        res3.innerHTML = resultado;
    } else {
        res3.innerHTML = "<p>Insira um número válido para a tabuada.</p>";
    }
}