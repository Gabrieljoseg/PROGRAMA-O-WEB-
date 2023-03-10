function calcular(event) {
    // Obter os valores dos campos do formulário
    const populacaoA = Number(document.getElementById("popA").value);
    const taxaA = Number(document.getElementById("taxaA").value) / 100;
    const populacaoB = Number(document.getElementById("popB").value);
    const taxaB = Number(document.getElementById("taxaB").value) / 100;

    // Validar os valores dos campos
    if (popA <= 0 || taxaA <= 0 || popB <= 0 || taxaB <= 0) {
        alert("Os valores informados devem ser maiores do que zero.");
        return;
    }

    // Calcular o número de anos necessários
    let anos = 0;
    while (popA < popB) {
        popA *= 1 + taxaA;
        popB *= 1 + taxaB;
        anos++;
    }

    // Exibir o resultado
     if(popA = popB) {
        alert("A população do país A ultrapassará a população do país B em " + anos + " anos.");
        return;
    }
}