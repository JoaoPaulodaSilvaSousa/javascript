function digaMeuNome() {
    const name = 'João Paulo'
    console.log(name)
}

function Soma(numero1, numero2) {
    const resultado = numero1 + numero2
    console.log(resultado)
}

function estaEndividado(receita, gastos) {
    if(receita > gastos) {
        return "Está no AZUL"
    } else {
        return "Está no VERMELHO"
    }
}

const maria = estaEndividado(5000, 7000)
const joao = estaEndividado(10000,2000)


/* Arrow Function (Função flecha) */

const MeuNome = (nome, nome2, nome3) => {
    return [nome, nome2, nome3]
}

console.log(MeuNome('Pedro', 'Arroz', 'Feijao'))