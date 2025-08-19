let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // no repetir amigls
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        input.value = "";
        return;
    }

    amigos.push(nombre);

    // limpiar box
    input.value = "";

    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let numero = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[numero];

    resultado.innerHTML = "<li>🎉 El amigo sorteado es: <b>" + elegido + "</b></li>";
}
