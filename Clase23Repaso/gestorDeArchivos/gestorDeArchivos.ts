/* Este Ejercicio Trabaja con Archivos de texto. 
El Constructor recibe como parametro la Ubicacion del Archivo.  */

import * as fs from 'fs';

class GestorDeArchivos {
    private ubicacion: string;
    private arreglo: string[];
    
    constructor(ubicacion: string) { 
        let nombres: string = fs.readFileSync(ubicacion, 'utf8');
        this.arreglo = new Array();
        this.arreglo = nombres.split('\r\n');
    } 

    public mostrarArreglo (arreglo: string[]) {
        console.log('El archivo de texto contiene: ', arreglo);
    }

    public retornarArreglo () {
        return this.arreglo;
    }
}

let ubicacion: string = 'gestorDeArchivos/archivo.txt';

let miArchivo = new GestorDeArchivos(ubicacion);

let arreglo: string[] = miArchivo.retornarArreglo();
miArchivo.mostrarArreglo(arreglo);

console.log('Mi Arreglo ', arreglo); 