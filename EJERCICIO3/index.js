/**
 * EJERCICIO 3. Crea una clase llamada Canción:
 * Atributos: título, género de la canción y un atributo privado que se llame autor.
 * Métodos:
 * • Crear un constructor que reciba como parámetros el título y género de la canción.
 * • Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
 * • Crea un método para mostrar los datos de la canción.
 * @param titulo
 * @param genero
 * @param autor
 */
var Cancion = /** @class */ (function () {
    // Constructor
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ""; // se inicializa el autor vacio, ya que se establecers con set
    }
    // metdo GET para obtener el valor del autor
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    // metdo SET para establecer el valor del autor
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    // metdo para mostrar los datos de la canción
    Cancion.prototype.mostrarCancion = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("G\u00E9nero: ".concat(this.genero));
        console.log("Autor: ".concat(this.autor));
    };
    return Cancion;
}());
var miCancion = new Cancion(' Night We Met', 'ROCK  🐱‍👤');
miCancion.setAutor('Lord Huron');
miCancion.mostrarCancion();
