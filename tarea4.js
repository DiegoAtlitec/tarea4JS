// Introducción a JavaScript
// Tarea 4 : 

let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`Libro "${titulo}" agregado a la lista de libros leidos.`);
}

function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has leido ningún libro.");
    }else{
        console.log("Libros leidos:");
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);});
    }
}


mostrarLibrosLeidos();

agregarLibro("Las hojas muertas");
agregarLibro("Resnick 1");
agregarLibro("Cien años de Soledad");
agregarLibro("Revelion en la granja");

mostrarLibrosLeidos();
