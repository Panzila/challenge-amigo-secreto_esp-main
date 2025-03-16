// Declarar los amigos.
let amigos = [];

// Funcion para agregar un amigo
function agregarAmigo () {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();


// Verificar que el campo no se encuentre vacio
if (nombreAmigo === ""){
    alert("Debes ingresar un nombre");
    return; // Detiene la ejecucion de la funicon
}    

// Validar que el nombre no se encuentre repetido
if (amigos.includes(nombreAmigo)) { //Comprueba si el nombre ya se encuentra en la lista
    alert("Este amigo ya se encuentra en la lista");
    return;
}

// Agregar el nombre al array de amigos
amigos.push(nombreAmigo);

// Limpiar campo de entrada
inputAmigo.value = ""; //Borra el contenido del campo de entrada para despues agregar otro nombre

// Actualizar lista en el HTML
actualizarLista();
}

// Funcion para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista
    listaAmigos.innerHTML = ""; // Elimina el contenido previo

    // Recorrer el array con un bucle for
    for(let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos [i];
        listaAmigos.appendChild(li);
    } 
}

//Funcion para seleccionar un amigo aleatorio
function sortearAmigo() {
    // Verificar que existan amigos en la lista
    if (amigos.length === 0) { //Comprueba si la lista de amigos esta vacia
        alert("Debes agregar amigos a la lista");
        return;
    }

    // Generar un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); //Genera un nmumero aleatorio entre 0 y la cantidad de amigos

    // obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio]; // Usa el indice aleatorio para obtener un nombre array

    //Mostrar el resultado en el HTML
    const resultado = document.getElementById("resultado"); //Obtiene el elememento del DOM con id "resultado"
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`//Actualiza el conenido del elemento con el nombre del amigo sorteado
}