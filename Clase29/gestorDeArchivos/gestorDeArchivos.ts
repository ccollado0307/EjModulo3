import * as fs from 'fs';

export class GestorDeArchivos {
    private ubicacion: string;
    private arreglo: Array<string>;
    
    constructor(ubicacion: string) { 
        let nombres: string = fs.readFileSync(ubicacion, 'utf8');
        this.arreglo = new Array();
        this.arreglo = nombres.split('\r\n');
    } 

    public mostrarArreglo (arreglo: Array<string>): boolean {
        if (this.arreglo.length == 1)   //El archivo esta vacio
            throw new Error('No hay nada para mostrar ');
      
        console.log('El archivo de texto contiene: ', arreglo);
        return true;
    }

    public retornarArreglo () {
        return this.arreglo;
    }
}