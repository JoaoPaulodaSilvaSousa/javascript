function verificar() {
    const num = Number(document.getElementById('sn').value)
    const resultado = document.getElementById('resultado')

    if (num % 2 === 0) {
        resultado.innerHTML = `O número${num} é par.`
    } else {
        resultado.innerHTML = `O número ${num} é ímpar.`
    }
}
