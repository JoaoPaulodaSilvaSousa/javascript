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

document.getElementById("Palavra1").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
    maiusculo()
    }
});

document.getElementById("Palavra2").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
    minusculo()
    }
});