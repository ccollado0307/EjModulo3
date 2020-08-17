import {Auto} from './auto';

export class AutoCarrera implements Auto {
    private color: string;
    private velocidadActual: number;

    public constructor() {
        this.color = '';
        this.velocidadActual = 0;
    }

    public acelerar(): void {
        this.velocidadActual+=50;
    }

    public getVelocidadMaxima(): number {
        return this.velocidadActual;
    }

    public setColor(color: string) {
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }
}