import {Persona} from './persona';
import {Examen} from './examen';

export class Alumno extends Persona {
    private anioCurso: number;
    private listaExamenes: Array<Examen>;

    public constructor(apellido: string,nombre: string,DNI: number,anioCurso: number) {
        super(apellido,nombre,DNI);
        this.anioCurso = anioCurso;
        this.listaExamenes = [];
    }

    public getPromedio(): number {
        let promedio: number = 0;
        for (let i: number = 0; i < this.listaExamenes.length; i++) {
            promedio += this.listaExamenes[i].getNota();
        }    

        return promedio/this.listaExamenes.length;
    }

    public cargarExamen(materia:string,nota:number): void {
        let examen: Examen = new Examen(materia,nota);  
        this.listaExamenes.push(examen); 
    }
}