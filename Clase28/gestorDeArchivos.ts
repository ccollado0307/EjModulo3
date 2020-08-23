/* Este Ejercicio Trabaja con Archivos de texto. 
El Constructor recibe como parametro la Ubicacion del Archivo.  */

import * as fs from 'fs';

export class GestorDeArchivos {
    private ubicacion: string;
    private arreglo: Array<string>;
    
    constructor(ubicacion: string) { 
        let nombres: string = fs.readFileSync(ubicacion, 'utf8');
        this.arreglo = new Array();
        this.arreglo = nombres.split('\r\n');
    } 

    public mostrarArreglo (arreglo: Array<string>) {
        console.log('El archivo de texto contiene: ', arreglo);
    }

    public retornarArreglo () {
        return this.arreglo;
    }

}