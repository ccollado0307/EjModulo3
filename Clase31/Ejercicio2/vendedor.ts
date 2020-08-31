import {Auto} from './auto';
import {AutoBuilder} from './autoBuilder';

export class Vendedor {
    private autoBuilder: AutoBuilder;

    public setAutoBuilder(autoBuilder: AutoBuilder): void {
        this.autoBuilder = autoBuilder;
    }

    public getAuto(): Auto {
        return this.autoBuilder.getAuto();
    }

    public constAuto(): void {
        this.autoBuilder.createNewAutoProduct();
        this.autoBuilder.constMarca();
        this.autoBuilder.constModelo();
        this.autoBuilder.constColor();
        this.autoBuilder.constVelocidadMaxima();
        this.autoBuilder.constTipoCaja();
        this.autoBuilder.constGasolero();
    }
}
