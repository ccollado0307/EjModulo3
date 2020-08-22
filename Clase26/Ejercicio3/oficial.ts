import {Persona} from './persona';
import {Carrera} from './carrera';

export class Oficial extends Persona {
    private carrera: Carrera;
    private actividad: boolean;

    public constructor(dni: string,apYNombre:string,carrera:Carrera,actividad: boolean) {
        super(dni,apYNombre);
        this.carrera = carrera;
        this.actividad = actividad;
    }

    public setCarrera(carrera: Carrera) {
        this.carrera = carrera;
    }

    public getCarrera(): Carrera {
        return this.carrera;
    }

    public indicarGrado() {
        this.grado = 'OFICIAL';
    }
}