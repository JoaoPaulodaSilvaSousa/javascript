function tabuada() {
    let num = document.getElementById('txtn')
    let tabu = document.getElementById('seltab')

    if ( num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        for (c = 1; c <= 10; c = n++) {
            window.alert(`${c}`)
        }
    }
}