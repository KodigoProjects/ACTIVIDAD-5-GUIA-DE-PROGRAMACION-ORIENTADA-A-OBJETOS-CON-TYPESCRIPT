class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipoDeCuenta: string;
    private numeroDeCuenta: string;

    // Constructor
    constructor(nombre: string, cantidad: number, tipoDeCuenta: string, numeroDeCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoDeCuenta = tipoDeCuenta;
        this.numeroDeCuenta = numeroDeCuenta;
    }

    // metodo para depositar dinero
    public depositar(monto: number): void {
        if (monto < 5)
            console.log('😢🐴 Mi rey usted es pobre? debe ingresar un monto mayor a $5.00. ✔🔃');
        else {
            this.cantidad += monto;
            console.log(`🤑 Se ha depositado correctamente: $${monto}.`);
            console.log(`💲 Saldo actual: $${this.cantidad}.`);
        }
    }

    // metodo para retirar dinero
    public retirar(valor: number): void {
        if (valor < 5)
            console.log('💱 La cantidad a retirar debe ser mayor de $5.00.');
        else if (this.cantidad < valor)
            console.log('😢 No hay suficiente saldo en la cuenta para retirar esa cantidad.');
        else {
            this.cantidad -= valor;
            console.log(`💱 Has retirado: $${valor}.`);
            console.log(`💲 Saldo restante: $${this.cantidad}.`);
        }
    }
    // metodo para mostrar los datos de la cuenta
    public mostrarDatos(): void {
        console.log(`🐴 Nombre: ${this.nombre}`);
        console.log(`🤖 Tipo de cuenta: ${this.tipoDeCuenta}`);
        console.log(`🎇 Número de cuenta: ${this.numeroDeCuenta}`);
    }
}

// Ejemplo de uso
const miCuenta = new Cuenta('Jeffrey Mardoqueo', 100, 'Ahorros', '1234567890');

miCuenta.mostrarDatos();
miCuenta.depositar(50);
miCuenta.retirar(30);
miCuenta.retirar(200);
miCuenta.depositar(3);              