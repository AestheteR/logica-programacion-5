const numeroSecreto = generarNumeroSecreto();
const numerosIngresados = [];

document.getElementById("numeroInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adivinarNumero();
    }
});

function adivinarNumero() {
    event.preventDefault();
    limpiarMensajes();
    const inputNumero = document.getElementById("numeroInput").value;

    
    if (validarNumero(inputNumero)) {
        const numeroAdivinado = parseInt(inputNumero);
        numerosIngresados.push(numeroAdivinado);

        if (numeroAdivinado === numeroSecreto) {
            mostrarMensaje("¡Felicidades, adivinaste el número secreto!");
            mostrarMensaje("Números introducidos: " + numerosIngresados.join(", "));
            return adivinarNumero
        } else if (numeroAdivinado < numeroSecreto) {
            mostrarMensaje("El número secreto es mayor. Vuelve a intentarlo.");
            mostrarMensaje("Números introducidos: " + numerosIngresados.join(", "));
        } else {
            mostrarMensaje("El número secreto es menor. Vuelve a intentarlo.");
            mostrarMensaje("Números introducidos: " + numerosIngresados.join(", "));
        }
    } else {
        mostrarMensaje("Por favor, ingresa un número válido.");
    }
    return false
    
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1;
}

function validarNumero(valor) {
    return !isNaN(valor) && valor !== null && valor !== "" && Number.isInteger(parseFloat(valor));
}

function mostrarMensaje(mensaje) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML += `<p>${mensaje}</p>`;
}

function limpiarMensajes() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
// Para limpiar los mensajes dentro del input
    const mensajeInput = document.getElementById("mensajeInput");
    mensajeInput.textContent = "";
}
