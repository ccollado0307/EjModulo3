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

    public indicarCantLados() {
        this.cantLados = 1;
    }
}