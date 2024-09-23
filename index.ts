/**
 * EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
 * obtenga el título, color y fuente de la página, el segundo método que indique como desea que
 * aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
 * propiedades.
 *    @param titulo
 *    @param color
 *    @param fuente
 *    @param alineacion
 */

class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;

    // Constructor
    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    public obtenerPropiedades(): { titulo: string, color: string, fuente: string } {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        }
    }
    //para pedir como sera la alineacion
    public establecerAlineacion(alineacion: 'centrado' | 'derecha' | 'izquierda'): void {
        (alineacion === 'centrado' || alineacion === 'derecha' || alineacion === 'izquierda') ? console.log(`Alineacion: ${alineacion}.`) : console.log('NOOOO MI REY 🥱, elija entre : centrado, derecha o izquierda.');
    }

    //aqui para mostrar las propiedaes
    public imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
    }
}

const cabecera = new CabeceraPagina('Jeffrey Mardoqueo', 'Azul', 'Bold');
cabecera.imprimirPropiedades();
cabecera.establecerAlineacion('centrado');
