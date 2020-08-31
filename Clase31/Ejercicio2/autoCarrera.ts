import {AutoBuilder} from './autoBuilder';

export class AutoCarreraBuilder extends AutoBuilder {
            
    public constMarca(): void {
        this.auto.setMarca("Ford");
    }
    
    public constModelo(): void {
        this.auto.setModelo(2020);
    }
    
    public constColor(): void {
        this.auto.setColor("Azul");
    }
    
    public constVelocidadMaxima(): void {
        this.auto.setVelocidadMaxima(280);
    }
    
    public constTipoCaja(): void {
        this.auto.setTipoCaja("Manual");
    }
    
    public constGasolero(): void {
        this.auto.setGasolero(false);
    }
}