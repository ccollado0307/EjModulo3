export class Examen {
    private nombreMateria: string;
    private nota: number;

    public constructor(nombreMateria: string,nota: number) {
        this.nombreMateria = nombreMateria;
        this.nota = nota;
    }

    public getNota(): number {
        return this.nota;
    }
}