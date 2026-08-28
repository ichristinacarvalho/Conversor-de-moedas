function converter() {

    //ENTRADA
    let valor = Number(document.getElementById("valor").value);
    let moeda = document.getElementById("moeda").value;
    let moeda2 = document.getElementById("moeda2").value;

    //VALIDAÇÃO
    if (valor <= 0) {
        alert("Digite um valor válido!");
        return;
    }

    if (moeda === "" || moeda2 === "") {
        alert("Escolha a moeda para conversão!");
        return;
    }

    if (moeda === moeda2) {
        alert("Escolha uma moeda diferente para a conversão.");
        return;
    }

    //PROCESSAMENTO
    let resultado;

    if (moeda === "real" && moeda2 === "dolar") {
        resultado = valor / 5.50;
    } else if (moeda === "real" && moeda2 === "euro") {
        resultado = valor / 6.40;
    } else if (moeda === "dolar" && moeda2 === "real") {
        resultado = valor * 5.50;
    } else if (moeda === "dolar" && moeda2 === "euro") {
        resultado = (valor * 5.50) / 6.40;
    } else if (moeda === "euro" && moeda2 === "real") {
        resultado = valor * 6.40;
    } else if (moeda === "euro" && moeda2 === "dolar") {
        resultado = (valor * 6.40) / 5.50
    }

    //SAÍDA
    document.getElementById("resultado").innerHTML = `O valor convertido de ${moeda} para ${moeda2} é ${resultado.toFixed(2)}.`
}

//LIMPAR CAMPOS
function limparCampos() {

    //INPUTS
    document.getElementById("valor").value = "";
    document.getElementById("moeda").value = "";
    document.getElementById("moeda2").value = "";

    //RESULTADO
    document.getElementById("resultado").innerHTML = "";
}