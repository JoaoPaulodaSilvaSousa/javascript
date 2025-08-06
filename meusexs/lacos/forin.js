// const user = {
//     name: 'Rodolfo',
//     age: 33,
//     street: 'Rua dos Bobos'
// }



// for (let key in user) {
//     console.log(`${key} : ${user[key]}`)
// }

const cidades = {
    SP: 1,
    Rj: 2,
    Ce: 321212,
    Ba: 4324
}

for (let key in cidades) {
    if (cidades[key] < 300000) {
        console.log(`${key} : ${cidades[key]} é uma cidade pequena`);
    } else {
        console.log(`${key} : ${cidades[key]} é uma cidade grande`);
    }
}