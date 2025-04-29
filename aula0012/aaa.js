var agora = new Date()
var hora = agora.getHours()

var hora = 1

console.log(`Agora são ${hora} horas`)
if (hora >= 6 && hora < 12) {
    console.log ('Bom Dia!')
} else if (hora <18) {
    console.log('Boa Tarde!')
} else if (hora <= 23) {
    console.log('Boa noite!')
} else {
    console.log('Boa Madrugada!')
}