import {Vehiculo} from './vehiculo';

export class AutoDeportivo extends Vehiculo {
    private descapotable: boolean;    

    public constructor(marca: string) {
        super(marca);
        this.descapotable = false;  
    }

    public acelerar(): void {
        this.velocidadActual += 20;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public modifDescapotableCaja() {
        this.descapotable = !this.descapotable;
    }

    public getDescapotable(): boolean {
        return this.descapotable;
    }
}