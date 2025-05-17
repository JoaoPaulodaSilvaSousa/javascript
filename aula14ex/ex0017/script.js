function tabuada() {
    let num = document.getElementById('txtn')
    let tabu = document.getElementById('seltab')

    if ( num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tabu.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option'); // Cria um elemento <option>
            item.text = `${n} x ${c} = ${n * c}`; // Define o texto da opção
            item.value = `tabu${c}`; // Define o valor da opção (opcional, mas útil)
            tabu.appendChild(item); // Adiciona a opção ao <select>
            
        }
    }
}

