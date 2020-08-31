import {Alumno} from './alumno';
import {GestorDeArchivos} from './gestorDeArchivos';

export class Legajos {
    private listaLegajos: Array<Alumno>;

    public constructor () {
        this.listaLegajos = [];
    }

    public agregarAlumno(alumno: Alumno) {
        this.listaLegajos.push(alumno);
    }

    public promAlumno(DNI: number): number {
        let alumno: Alumno = this.listaLegajos[this.buscarAlumno(DNI)]; 
        let promedio: number = alumno.getPromedio(); 
        return promedio;
    }

    private buscarAlumno(DNI: number): number {
        for (let i: number = 0; i < this.listaLegajos.length; i++) {
            if (this.listaLegajos[i].getDNI() == DNI)
                return i;
        }
        return -1
    }

    public promGeneral(): number {
        let promedio: number = 0;
        for (let i: number = 0; i < this.listaLegajos.length; i++) {
            promedio += this.listaLegajos[i].getPromedio();
        }
        return promedio/this.listaLegajos.length;
    }

    public cargarAlumnos(): void {
        let ubicacion: string = 'alumnos.txt';

        let miArchivo = new GestorDeArchivos(ubicacion);

        let arreglo: Array<string> = miArchivo.retornarArreglo();
    
        for (let i: number = 0; i < arreglo.length; i++) { 
            let cadenaAlumno: Array<string> = arreglo[i].split(' ');

            let alumno: Alumno = new Alumno(cadenaAlumno[0],cadenaAlumno[1],parseInt(cadenaAlumno[2]),parseInt(cadenaAlumno[3]));
            
            for (let j: number = 4; j < cadenaAlumno.length -1; j++) {
                let materia: string = cadenaAlumno[j];
                let nota: number = parseInt(cadenaAlumno[j+1]);
                alumno.cargarExamen(materia,nota);
                j++;
            }      
            this.listaLegajos.push(alumno);    
        }
    }
}