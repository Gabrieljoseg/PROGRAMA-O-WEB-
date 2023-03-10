function encontrarMaior() {
    // Lê os valores dos campos de input
    let num1 = parseInt(document.getElementById("numero 1").value);
    let num2 = parseInt(document.getElementById("numero 2").value);
    let num3 = parseInt(document.getElementById("numero 3").value);
    let num4 = parseInt(document.getElementById("numero 4").value);
    let num5 = parseInt(document.getElementById("numero 5").value);

    // Encontra o maior número
 let soma = num1 + num2 + num3 + num4 + num5; 

 let media = soma/5;
 
 // Exibe o resultado
 alert( "A soma de todos os valores é:"+soma+". A média é:"+media+".")
}
