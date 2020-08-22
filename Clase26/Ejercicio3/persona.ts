export class Persona {
    private dni: string;
    private apYNomb: string;
    protected grado: string ;

    public constructor(dni:string,apYNomb:string) {
        this.dni = dni;
        this.apYNomb = apYNomb;
        this.grado = '';
    }

    public indicarGrado() {
        this.grado = 'EA';
    }

    public setDNI(dni:string) {
        this.dni = dni;
    }

    public getDNI(): string {
        return this.dni;
    }

    public setApYNomb(apYNomb:string) {
        this.apYNomb = apYNomb;
    }

    public getApYNomb(): string {
        return this.apYNomb;
    }
}