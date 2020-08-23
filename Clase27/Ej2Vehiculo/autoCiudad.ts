import {Vehiculo} from './vehiculo';

export class AutoCiudad extends Vehiculo {
    private tipoCaja: string;

    public constructor(marca: string, tipoCaja: string) {
        super(marca);
        this.tipoCaja = tipoCaja;
    }

    public acelerar(): void {
        this.velocidadActual += 15;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public setTipoCaja(tipoCaja: string) {
        this.tipoCaja = tipoCaja;
    }

    public getTipoCaja(): string {
        return this.tipoCaja;
    }
}