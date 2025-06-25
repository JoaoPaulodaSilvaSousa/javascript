function conte() {
    let num = Number(document.getElementById("contar").value)
    let res = document.getElementById("res")

    if (num >= 0) {
        res.innerHTML = `Contando do 0 até ${num}: `
    }
    
    for (i = 0; i <= num; i++) {
        res.innerHTML += `${i} `;
    }
}