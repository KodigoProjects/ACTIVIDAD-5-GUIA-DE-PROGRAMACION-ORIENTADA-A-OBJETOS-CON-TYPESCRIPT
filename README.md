
## Instrucciones para compilar y ejecutar un archivo TypeScript

1. **Abre una terminal en el directorio del proyecto**  
   Asegúrate de estar en el directorio correcto donde se encuentra tu archivo `index.ts`. Usa el comando `cd` si es necesario para navegar al directorio donde guardaste tu archivo.

   ```bash
   tsc index.ts
   ```

2. **Compila el archivo TypeScript**  
   Utiliza el compilador de TypeScript (`tsc`) para convertir el archivo `.ts` en un archivo `.js`. Si no tienes TypeScript instalado, instálalo globalmente con `npm install -g typescript`.

   ```bash
   tsc index.ts
   ```

3. **Ejecuta el archivo compilado con Node.js**  
   Usa Node.js para ejecutar el archivo `.js` resultante de la compilación.

   ```bash
   node index.js
   ```
