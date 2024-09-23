/**
 * . Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos:
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase abstracta Persona
var Persona = /** @class */ (function () {
    // Constructor meter datos
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    // metodo para verificar si es mayor de edad
    Persona.prototype.esMayorDeEdad = function () {
        if (this.edad >= 18) {
            console.log("".concat(this.nombre, " ").concat(this.apellido, " es mayor de edad."));
        }
        else {
            console.log("".concat(this.nombre, " ").concat(this.apellido, " no es mayor de edad."));
        }
    };
    return Persona;
}());
// Clase Empleado que hereda de Persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    // Constructor que inicializa los datos del empleado, incluyendo el sueldo
    function Empleado(nombre, apellido, direccion, telefono, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this; // Llama al constructor de la clase padre (Persona)
        _this.sueldo = sueldo;
        return _this;
    }
    // metodo para cargar un nuevo sueldo
    Empleado.prototype.cargarSueldo = function (nuevoSueldo) {
        this.sueldo = nuevoSueldo;
    };
    // metodo para imprimir el sueldo del empleado
    Empleado.prototype.imprimirSueldo = function () {
        console.log("El sueldo de ".concat(this.nombre, " ").concat(this.apellido, " es: $").concat(this.sueldo));
    };
    // Implementación del metodo abstracto para mostrar los datos personales
    Empleado.prototype.mostrarDatosPersonales = function () {
        console.log("Nombre: ".concat(this.nombre, " ").concat(this.apellido));
        console.log("Direcci\u00F3n: ".concat(this.direccion));
        console.log("Tel\u00E9fono: ".concat(this.telefono));
        console.log("Edad: ".concat(this.edad));
    };
    return Empleado;
}(Persona));
// Ejemplo de uso
var empleado = new Empleado('Juan', 'Pérez', 'Calle Falsa 123', '555-1234', 30, 1500);
empleado.mostrarDatosPersonales();
empleado.esMayorDeEdad();
empleado.imprimirSueldo();
empleado.cargarSueldo(1800);
empleado.imprimirSueldo();
