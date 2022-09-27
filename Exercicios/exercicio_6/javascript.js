let elementos = [];
let btnAdicionar = document.getElementById("btnAdicionar");

btnAdicionar.addEventListener("click", function () {

    let valor = document.getElementById("valor").value;
    elementos.push(valor.toString());

    let oldOL = document.getElementById("lista");
    if (oldOL !== null)
   { document.body.removeChild(oldOL); }

    elementos.sort();

    let elementoOL = document.createElement("OL");
    elementoOL.setAttribute("id", "lista");
    elementos.forEach(element => {
        let elementLI = document.createElement("LI");
        let elementBR = document.createElement("BR");
        let textNode = document.createTextNode(element);
        elementLI.appendChild(textNode);
        elementoOL.appendChild(textNode);
        elementoOL.appendChild(elementBR);
    });

    document.body.appendChild(elementoOL);
});