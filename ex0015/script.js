function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dado e tente novamnte!')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homen'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bbh.jpeg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jh.jpeg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/ah.jpeg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/ih.jpeg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bbf.jpeg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jm.jpeg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/am.jpeg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/im.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}