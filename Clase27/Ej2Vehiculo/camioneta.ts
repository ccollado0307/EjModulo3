import {Vehiculo} from './vehiculo';

export class Camioneta extends Vehiculo {
    private conCaja: boolean;

    public constructor(marca: string, conCaja: boolean) {
        super(marca);
        this.conCaja = conCaja;
    }

    public acelerar(): void {
        this.velocidadActual += 10;
    }

    public setColor(): void {
        this.color = 'blanco';
    }

    public setCaja() {
        this.conCaja = !this.conCaja;
    }

    public getCaja(): boolean {
        return this.conCaja;
    }
}