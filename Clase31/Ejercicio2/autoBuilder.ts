import {Auto} from './auto';

export abstract class AutoBuilder {
    protected auto: Auto;

    public getAuto(): Auto {
        return this.auto;
    }

    public createNewAutoProduct(): void {
        this.auto = new Auto();
    }

    public abstract constMarca(): void;
    public abstract constModelo(): void;
    public abstract constColor(): void;
    public abstract constVelocidadMaxima(): void;
    public abstract constTipoCaja(): void;
    public abstract constGasolero(): void;
}