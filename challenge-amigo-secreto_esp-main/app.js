// script.js
let amigos = [];

/**
 * Función para adicionar un amigo a la lista.
 */
function adicionarAmigo() {
    const nombreInput = document.getElementById('nombreAmigo');
    const nombre = nombreInput.value.trim(); // .trim() para eliminar espacios en blanco al inicio/final

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido para el amigo.');
        return; // Detener la ejecución si el campo está vacío
    }

    // Convertir el nombre a Capital Case (primera letra mayúscula, el resto minúscula)
    const nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    // Validar que el nombre no esté repetido
    if (amigos.includes(nombreFormateado)) {
        alert(`"${nombreFormateado}" ya se encuentra en la lista.`);
        nombreInput.value = ''; // Limpiar el campo de texto
        return;
    }

    amigos.push(nombreFormateado);
    actualizarListaAmigos();
    nombreInput.value = ''; // Limpiar el campo de texto
    document.getElementById('amigoSorteado').textContent = ''; // Limpiar el resultado anterior
}

/**
 * Función para actualizar la visualización de la lista de amigos.
 */
function actualizarListaAmigos() {
    const listaAmigosUl = document.getElementById('listaAmigos');
    listaAmigosUl.innerHTML = ''; // Limpiar la lista existente antes de añadir los nuevos elementos

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosUl.appendChild(li);
    });
}

/**
 * Función para sortear un amigo de la lista.
 */
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Primero debes agregar al menos un amigo para poder sortear.');
        return;
    }

    if (amigos.length === 1) {
        alert('Necesitas al menos dos amigos para realizar un sorteo. ¡El único amigo en la lista ya es el amigo secreto!');
        document.getElementById('amigoSorteado').textContent = amigos[0];
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('amigoSorteado').textContent = amigoSorteado;
}

/**
 * Función para reiniciar la aplicación, limpiando la lista y el resultado.
 */
function reiniciar() {
    amigos = []; // Vaciar el array de amigos
    actualizarListaAmigos(); // Actualizar la lista en la interfaz
    document.getElementById('nombreAmigo').value = ''; // Limpiar el campo de texto
    document.getElementById('amigoSorteado').textContent = ''; // Limpiar el resultado del sorteo
}

// Inicializar la lista al cargar la página (opcional, si hay amigos precargados)
// actualizarListaAmigos();