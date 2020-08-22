import {Persona} from './persona';

export class Suboficial extends Persona {
    private supSubalt: boolean;
        
    public constructor(dni: string,apYNombre:string,subSubalt: boolean) {
        super(dni,apYNombre);   
        this.supSubalt = subSubalt;
    }

    public setSupSubalt(supSubalt: boolean) {
        this.supSubalt = supSubalt;
    }

    public getSupSubalt(): boolean {
        return this.supSubalt;
    }

    public indicarGrado() {
        this.grado = 'SUBOFICIAL';
    }
}