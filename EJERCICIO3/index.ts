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

class Cancion {
    private titulo: string;
    private genero: string;
    private autor: string;

    // Constructor
    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ""; // se inicializa el autor vacio, ya que se establecers con set
    }

    // metdo GET para obtener el valor del autor
    public getAutor(): string {
        return this.autor;
    }

    // metdo SET para establecer el valor del autor
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    // metdo para mostrar los datos de la canción
    public mostrarCancion(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
    }
}

const miCancion = new Cancion(' Night We Met', 'ROCK  🐱‍👤');
miCancion.setAutor('Lord Huron');
miCancion.mostrarCancion(); 
