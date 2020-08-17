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

    public setColor(): void {
        this.color = 'azul';
    }

    public setTipoCaja(tipoCaja: string) {
        this.tipoCaja = tipoCaja;
    }

    public getTipoCaja(): string {
        return this.tipoCaja;
    }
}