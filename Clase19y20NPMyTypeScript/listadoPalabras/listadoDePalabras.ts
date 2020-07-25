import * as readlineSync from 'readline-sync'
let arreglo = new Array();

let cargarArreglo = () => {
    let palabra = readlineSync.question('Ingrese una palabra. Un punto (.) indica el fin de la lista: ');
    while (palabra != '.') {
        arreglo.push(palabra);
        palabra = readlineSync.question('Ingrese una palabra. Un punto (.) indica el fin de la lista: ');
    };
};

let insertar = (palabra:string) => {
    arreglo.push(palabra);
};

let eliminar = (palabra:string) => {
    if (buscar(palabra)) {
        arreglo.splice(arreglo.indexOf(palabra), 1);
    }
};

let buscar = (palabra:string) => { return(arreglo.indexOf(palabra) != -1); }

let actualizar = (palabra1:string, palabra2:string) => {
    if (buscar(palabra1)) {
        arreglo.splice(arreglo.indexOf(palabra1), 1, palabra2);
    }
};

cargarArreglo();
console.log('Lista de Palabras: ', arreglo);

insertar(readlineSync.question('Ingrese la Palabra a Insertar en la Lista de Palabras: '));
console.log('Lista de Palabras luego de Insertar: ', arreglo);

eliminar(readlineSync.question('Ingrese la Palabra a Eliminar de la Lista de Palabras: '));
console.log('Lista de Palabras luego de Eliminar: ', arreglo);

console.log('La palabra se encuentra en la Lista de Palabras?: ', buscar(readlineSync.question('Ingrese la Palabra a Buscar de la Lista de Palabras: ')));

actualizar(readlineSync.question('Ingrese la Palabra a Actualizar en la Lista de Palabras: '), readlineSync.question('Ingrese la Palabra por la cual la quiere Actualizar: '));
console.log('Lista de Palabras despues de Actualizar: ', arreglo);