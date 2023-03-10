function calcular() {
    // Obter os valores dos campos de entrada
    let populacaoA = parseFloat(document.getElementById("populacaoA").value);
    let crescimentoA = parseFloat(document.getElementById("crescimentoA").value);
    let populacaoB = parseFloat(document.getElementById("populacaoB").value);
    let crescimentoB = parseFloat(document.getElementById("crescimentoB").value);

    // Validar os valores de entrada
    if (isNaN(populacaoA) || isNaN(crescimentoA) || isNaN(populacaoB) || isNaN(crescimentoB)) {
        alert("Por favor, preencha todos os campos com valores numéricos.");
        return;
    }

    if (populacaoA <= 0 || populacaoB <= 0 || crescimentoA < 0 || crescimentoB < 0) {
        alert("Por favor, preencha todos os campos com valores maiores que zero e taxas de crescimento não negativas.");
        return;
    }

    // Calcular o número de anos necessários
    let anos = 0;

        while (populacaoA < populacaoB) {
          populacaoA = populacaoA * (1 + taxaCrescimentoA / 100);
          populacaoB = populacaoB * (1 + taxaCrescimentoB / 100);
          anos++;
        }
    
    document.getElementById("resultado").innerHTML = `Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`;
        
}
      