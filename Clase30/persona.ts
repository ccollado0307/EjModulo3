export class Persona {
    private apellido: string;
    private nombre: string;
    private DNI: number;

    public constructor(apellido: string,nombre: string,DNI: number) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.DNI = DNI;
    }

    public getDNI(): number {
        return this.DNI;
    }
}