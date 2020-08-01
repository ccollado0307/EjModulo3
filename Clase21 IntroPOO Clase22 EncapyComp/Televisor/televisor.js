var TV = /** @class */ (function () {
    function TV(volumenInicial, canalInicial) {
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
        this.estaPrendido = false;
    }
    TV.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    TV.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    TV.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    TV.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    TV.prototype.bajarCanal = function () {
        this.canalActual = this.canalActual - 1;
    };
    TV.prototype.elegirCanal = function (canal) {
        this.canalActual = canal;
    };
    return TV;
}());
var volumen = 10;
var canal = 24;
var miTV = new TV(volumen, canal);
console.log(miTV);
miTV.prenderApagar();
miTV.elegirCanal(3);
console.log(miTV);
