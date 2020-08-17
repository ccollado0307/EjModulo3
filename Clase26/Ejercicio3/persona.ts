export class Persona {
    private dni: string;
    apYNomb: string;
    protected grado: string ;

    public constructor(dni:string,apYNomb:string) {
        this.dni = dni;
        this.apYNomb = apYNomb;
        this.grado = '';
    }

    public setGrado(grado: string) {
        this.grado = 'SV';
    }

    public secDNI(dni:string) {
        this.dni = dni;
    }

    public getDNI(): string {
        return this.dni;
    }

    public secApYNomb(apYNomb:string) {
        this.apYNomb = apYNomb;
    }

    public getApYNomb(): string {
        return this.apYNomb;
    }
}