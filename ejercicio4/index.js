var Cuenta = /** @class */ (function () {
    // Constructor
    function Cuenta(nombre, cantidad, tipoDeCuenta, numeroDeCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoDeCuenta = tipoDeCuenta;
        this.numeroDeCuenta = numeroDeCuenta;
    }
    // metodo para depositar dinero
    Cuenta.prototype.depositar = function (monto) {
        if (monto < 5)
            console.log('😢🐴 Mi rey usted es pobre? debe ingresar un monto mayor a $5.00. ✔🔃');
        else {
            this.cantidad += monto;
            console.log("\uD83E\uDD11 Se ha depositado correctamente: $".concat(monto, "."));
            console.log("\uD83D\uDCB2 Saldo actual: $".concat(this.cantidad, "."));
        }
    };
    // metodo para retirar dinero
    Cuenta.prototype.retirar = function (valor) {
        if (valor < 5)
            console.log('💱 La cantidad a retirar debe ser mayor de $5.00.');
        else if (this.cantidad < valor)
            console.log('😢 No hay suficiente saldo en la cuenta para retirar esa cantidad.');
        else {
            this.cantidad -= valor;
            console.log("\uD83D\uDCB1 Has retirado: $".concat(valor, "."));
            console.log("\uD83D\uDCB2 Saldo restante: $".concat(this.cantidad, "."));
        }
    };
    // metodo para mostrar los datos de la cuenta
    Cuenta.prototype.mostrarDatos = function () {
        console.log("\uD83D\uDC34 Nombre: ".concat(this.nombre));
        console.log("\uD83E\uDD16 Tipo de cuenta: ".concat(this.tipoDeCuenta));
        console.log("\uD83C\uDF87 N\u00FAmero de cuenta: ".concat(this.numeroDeCuenta));
    };
    return Cuenta;
}());
// Ejemplo de uso
var miCuenta = new Cuenta('Jeffrey Mardoqueo', 100, 'Ahorros', '1234567890');
miCuenta.mostrarDatos();
miCuenta.depositar(50);
miCuenta.retirar(30);
miCuenta.retirar(200);
miCuenta.depositar(3);
