/**
 * EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes metodos:
 * • Sumar
 * • Restar
 * • Multiplicar
 * • Dividir
 * • Potencia
 * • Factorial
 */
var Calculadora = /** @class */ (function () {
    // Constructor
    function Calculadora(numero1, numero2) {
        this.num1 = numero1;
        this.num2 = numero2;
    }
    // metodo para sumar
    Calculadora.prototype.Sumar = function () {
        return {
            resultado: this.num1 + this.num2
        };
    };
    // metodo para restar
    Calculadora.prototype.Restar = function () {
        return {
            resultado: this.num1 - this.num2
        };
    };
    // metodo para multiplicar
    Calculadora.prototype.Multiplicar = function () {
        return {
            resultado: this.num1 * this.num2
        };
    };
    // metodo para dividir
    Calculadora.prototype.Dividir = function () {
        if (this.num2 === 0) {
            return { resultado: "Error: División por cero" };
        }
        else {
            return { resultado: this.num1 / this.num2 };
        }
    };
    // metodo para calcular la potencia (num1^num2)
    Calculadora.prototype.Potencia = function () {
        return {
            resultado: Math.pow(this.num1, this.num2)
        };
    };
    // metodo para calcular el factorial de num1
    Calculadora.prototype.Factorial = function () {
        var factorial = function (n) {
            if (n < 0)
                return 0; // Factorial no definido para números negativos
            if (n === 0 || n === 1)
                return 1;
            //Llamada recursiva para calcular el factorial osea llamo a la funcion dentro de ella misma (✨✔✔ meme de me llame yo mismo)
            return n * factorial(n - 1);
        };
        return {
            resultado: factorial(this.num1)
        };
    };
    return Calculadora;
}());
var calculadora = new Calculadora(5, 3);
console.log("El resultado de la suma es: ".concat(calculadora.Sumar().resultado));
console.log("El resultado de la resta es: ".concat(calculadora.Restar().resultado));
console.log("El resultado de la multiplicaci\u00F3n es: ".concat(calculadora.Multiplicar().resultado));
console.log("El resultado de la divisi\u00F3n es: ".concat(calculadora.Dividir().resultado));
console.log("El resultado de la potencia es: ".concat(calculadora.Potencia().resultado));
console.log("El resultado del factorial es: ".concat(calculadora.Factorial().resultado));
