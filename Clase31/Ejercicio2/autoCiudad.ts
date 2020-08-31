import {AutoBuilder} from './autoBuilder';

export class AutoCiudadBuilder extends AutoBuilder {
    
    public constMarca(): void {
        this.auto.setMarca("Toyota");
    }

    public constModelo(): void {
        this.auto.setModelo(2019);
    }

    public constColor(): void {
        this.auto.setColor("Blanco");
    }

    public constVelocidadMaxima(): void {
        this.auto.setVelocidadMaxima(120);
    }

    public constTipoCaja(): void {
        this.auto.setTipoCaja("Manual");
    }

    public constGasolero(): void {
        this.auto.setGasolero(true);
    }
}