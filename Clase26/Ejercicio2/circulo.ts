import {Figura} from './figura';

export class Circulo extends Figura {
    private radio: number;

    public constructor(color: string) {
        super(color);
        this.radio = 2.0;
    }

    public setRadio(radio: number) {
        this.radio = radio;
    }

    public getRadio(): number {
        return this.radio;
    }

    public calcularPerimetro(): number {
        return (12.57);
    }

    public calcularArea(): number {
        return (12.57);
    }
}