import {Figura} from './figura';

export class Rectangulo extends Figura {
    private base: number;
    private altura: number;

    public constructor(base: number,altura:number,color: string) {
        super(color);
        this.base = base;
        this.altura = altura;
    }

    public setBase(base: number) {
        this.base = base;
    }

    public setAltura(altura: number) {
        this.altura = altura;
    }

    public indicarCantLados() {
        this.cantLados = 4;
    }
}