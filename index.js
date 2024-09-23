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
var CabeceraPagina = /** @class */ (function () {
    // Constructor
    function CabeceraPagina(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }
    // para obtener las propiedades
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    };
    //para pedir como sera la alineacion
    CabeceraPagina.prototype.establecerAlineacion = function (alineacion) {
        if (alineacion === 'centrado' || alineacion === 'derecha' || alineacion === 'izquierda') {
            console.log("Alineacion: ".concat(alineacion, "."));
        }
        else {
            console.log('NOOOO MI REY 🥱, elija entre : centrado, derecha o izquierda.');
        }
    };
    //para imprimir las propiedades de la clase
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
    };
    return CabeceraPagina;
}());
var cabecera = new CabeceraPagina('Jeffrey Mardoqueo', 'Azul', 'Bold');
cabecera.imprimirPropiedades();
cabecera.establecerAlineacion('centrado');
