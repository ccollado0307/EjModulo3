import {Auto} from './auto';

export class AutoCarrera extends Auto {
    private auspiciante: string;

    public constructor() {
        super();
        this.auspiciante = 'Flia Perez';
    }

    public setAuspiciante(auspiciante: string) {
        this.auspiciante = auspiciante;
    }

    public getAuspiciante (): string {
        return this.auspiciante;
    }

    public acelerar(): void {
        this.velocidadActual += 50;
    }
}