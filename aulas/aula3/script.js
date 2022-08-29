var el = document.getElementById("btVerificar");
el.addEventListener("click", isPalindromo, false);

function isPalindromo() {
    let texto = document.querySelector('#txtbox').value;
    let textoSemEspaco = texto.replace(" ", "").toLowerCase();
    let textInvertido = inverter(textoSemEspaco);

    if (textoSemEspaco == textInvertido)
        alert(texto + " é palíndromo") 
    else
        alert(texto + " não é palíndromo") 
}

function inverter(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }
    return newString;
}

