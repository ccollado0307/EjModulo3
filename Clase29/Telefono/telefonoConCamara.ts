import {Camara} from "./camara";
import {Telefono} from "./telefono";

export class TelefonoConCamara extends Telefono {
    private camara: Camara;

    public constructor() {
        super();
        this.camara = new Camara;
    }

    public sacarFoto(): void {
        this.camara.sacarFoto();
    }
}