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

// Clase abstracta Persona
abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    // Constructor meter datos
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    // metodo para verificar si es mayor de edad
    public esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
        }
    }

    // metodo abstracto para mostrar los datos personales
    public abstract mostrarDatosPersonales(): void;
}

// Clase Empleado que hereda de Persona
class Empleado extends Persona {
    private sueldo: number;

    // Constructor que inicializa los datos del empleado, incluyendo el sueldo
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);  // Llama al constructor de la clase padre (Persona)
        this.sueldo = sueldo;
    }

    // metodo para cargar un nuevo sueldo
    public cargarSueldo(nuevoSueldo: number): void {
        this.sueldo = nuevoSueldo;
    }

    // metodo para imprimir el sueldo del empleado
    public imprimirSueldo(): void {
        console.log(`El sueldo de ${this.nombre} ${this.apellido} es: $${this.sueldo}`);
    }

    // Implementación del metodo abstracto para mostrar los datos personales
    public mostrarDatosPersonales(): void {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
    }
}

// Ejemplo de uso
const empleado = new Empleado('Jeffrey', 'Mardoqeuo', 'Ssonsonate', '1234-12345', 30, 1500);

empleado.mostrarDatosPersonales();
empleado.esMayorDeEdad();
empleado.imprimirSueldo();
empleado.cargarSueldo(1800);
empleado.imprimirSueldo();           