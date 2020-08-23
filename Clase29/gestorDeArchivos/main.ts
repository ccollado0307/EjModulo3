import {GestorDeArchivos} from "./gestorDeArchivos";

let ubicacion: string = 'gestorDeArchivos/archivo.txt';

let miArchivo = new GestorDeArchivos(ubicacion);

let arreglo: string[] = miArchivo.retornarArreglo();

let vacio: boolean = false;
try {
    vacio = miArchivo.mostrarArreglo(arreglo);
    } catch(error) {
    console.log('No se puede mostrar el archivo ');
    }

console.log('Mi Arreglo ', arreglo); 