function adicionarponto() {
    let pontosA = document.getElementById("pontosequipeA").innerHTML;
    let soma = Number(pontosA) + 1;
    document.getElementById("pontosequipeA").innerHTML = soma;
}