function converter() {
    //pegando o valor dos inputs
    let valor = Number(document.getElementById("valor").value);
    let moeda = document.getElementById("moeda").value;
    let moeda2 = document.getElementById("moeda2").value;

    //validação de valores menores que 0 e negativos, valores vazios e se foi escolhido a mesma moeda
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

    //processamento
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

    //dicionário de símbolos para o texto
    const simbolos = {
        real: "R$",
        dolar: "US$",
        euro: "€"
    }

    //saída formatada com símbolos
    document.getElementById("resultado").innerHTML = `Conversão: ${simbolos[moeda]} ${valor.toFixed(2)} ➔ ${simbolos[moeda2]} ${resultado.toFixed(2)}`

    //limpeza dos campos de input
    document.getElementById("valor").value = "";
    document.getElementById("moeda").value = "";
    document.getElementById("moeda2").value = "";
}

//LIMPAR CAMPOS
function limparCampos() {
    document.getElementById("resultado").innerHTML = "";
}

/* --- EVENTOS --- */

//chamando o evento de converter
document.getElementById("conversao").addEventListener("click", converter);

//chamando o evento de limpar campos
document.getElementById("limpar").addEventListener("click", limparCampos);