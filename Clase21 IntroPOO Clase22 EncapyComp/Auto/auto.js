var Auto = /** @class */ (function () {
    function Auto(marca, modelo, color, velocidadMaxima) {
        this.estaEncendido = false;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        if (velocidadMaxima == undefined)
            this.velocidadMaxima = 0;
        else
            this.velocidadMaxima = velocidadMaxima;
    }
    Auto.prototype.setEstaEnc = function (estaEnc) {
        this.estaEncendido = estaEnc;
    };
    Auto.prototype.setMarca = function (marcaAuto) {
        this.marca = marcaAuto;
    };
    Auto.prototype.setModelo = function (modeloAuto) {
        this.modelo = modeloAuto;
    };
    Auto.prototype.setColor = function (colorAuto) {
        this.color = colorAuto;
    };
    Auto.prototype.setVelocidadMaxima = function (velocidadMaxima) {
        this.velocidadMaxima = velocidadMaxima;
    };
    return Auto;
}());
var miAuto = new Auto('TOYOTA', 2016, 'BLANCO');
console.log(miAuto);
miAuto.setEstaEnc(true);
miAuto.setMarca('FORD');
miAuto.setModelo(2020);
miAuto.setColor('GRIS NOCHE');
miAuto.setVelocidadMaxima(140);
console.log(miAuto);
