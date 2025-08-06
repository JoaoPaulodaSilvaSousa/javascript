const users = [
    { name: 'Rodolfo', age:5, contact: '(19) 98773-3434'},
    { name: 'Maria', age:13, contact: '(12) 95655-3324'},
    { name: 'João', age:33, contact: '(15) 94413-3114'},
    { name: 'Roberto', age:3, contact: '(17) 91233-3004'}
]

users.forEach(function(item, index, array) {
    if(item.age < 18) {
        console.log(`Cliente ${item.name}, posição ${index} é menor de idade`)
    } else{
        console.log(`Cliente ${item.name}, posição ${index} é maior de idade`)
    }
})