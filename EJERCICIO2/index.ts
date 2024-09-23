/** 
 * EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes metodos:
 * • Sumar
 * • Restar
 * • Multiplicar
 * • Dividir
 * • Potencia
 * • Factorial
 */

class Calculadora {
    private num1: number;
    private num2: number;

    // Constructor
    constructor(numero1: number, numero2: number) {
        this.num1 = numero1;
        this.num2 = numero2;
    }
    // metodo para sumar
    public Sumar(): { resultado: number } {
        return {
            resultado: this.num1 + this.num2
        };
    }
    // metodo para restar
    public Restar(): { resultado: number } {
        return {
            resultado: this.num1 - this.num2
        };
    }
    // metodo para multiplicar
    public Multiplicar(): { resultado: number } {
        return {
            resultado: this.num1 * this.num2
        };
    }
    // metodo para dividir
    public Dividir(): { resultado: number | string } {
        if (this.num2 === 0) {
            return { resultado: "Error: División por cero" };
        } else {
            return { resultado: this.num1 / this.num2 };
        }
    }
    // metodo para calcular la potencia (num1^num2)
    public Potencia(): { resultado: number } {
        return {
            resultado: Math.pow(this.num1, this.num2)
        };
    }
    // metodo para calcular el factorial de num1
    public Factorial(): { resultado: number } {
        const factorial = (n: number): number => {
            if (n < 0) return 0;  // Factorial no definido para números negativos
            if (n === 0 || n === 1) return 1;
            //Llamada recursiva para calcular el factorial osea llamo a la funcion dentro de ella misma (✨✔✔ meme de me llame yo mismo)
            return n * factorial(n - 1);
        };
        return {

            resultado: factorial(this.num1)
        };
    }
}

const calculadora = new Calculadora(5, 3);
console.log(`El resultado de la suma es: ${calculadora.Sumar().resultado}`);
console.log(`El resultado de la resta es: ${calculadora.Restar().resultado}`);
console.log(`El resultado de la multiplicación es: ${calculadora.Multiplicar().resultado}`);
console.log(`El resultado de la división es: ${calculadora.Dividir().resultado}`);
console.log(`El resultado de la potencia es: ${calculadora.Potencia().resultado}`);
console.log(`El resultado del factorial es: ${calculadora.Factorial().resultado}`);