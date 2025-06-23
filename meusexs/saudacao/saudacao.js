function seunome() {
    let nome = document.getElementById('nm').value
    let resultado = document.getElementById('resul')

    if (nome.trim() !== "") {
    resultado.innerHTML = "Oi, " + nome + '!';
} else {
    resultado.innerHTML = "Por favor, digite seu nome.";
}

}