function maiusculo() {
    let palavramai = document.getElementById("Palavra1").value.trim();
    let res = document.getElementById("res");
    
    res.innerHTML = palavramai.toUpperCase()
}

function minusculo() {
    let palavramin = document.getElementById("Palavra2").value.trim();
    let res = document.getElementById("res");
    
    res.innerHTML = palavramin.toLowerCase()
}
