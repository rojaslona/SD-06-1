# Instrucciones
Los constructores se usan para definir una plantilla para un nuevo tipo de objeto. El operador `new` creará una nueva instancia de ese objeto.

**Hoy, explorarás funciones constructoras y aprenderás a crear tus propios objetos definidos por el usuario.**

Para cada una de estas tareas, escribe tu código directamente en el archivo de la tarea.
## Tareas

1. Se te ha dado un constructor para un objeto Mail.
    * Modifica el código para que el asunto sea la palabra `hello` y el mensaje sea la palabra `world`.

2. Se te ha dado un constructor para un objeto Mail.
    * Modifica el código para que el usuario proporcione su propio asunto y mensaje como parámetros de ejecución en ese orden.
    * Los parámetros de ejecución son los valores que se pasan a un programa cuando se ejecuta.
    * Por ejemplo, si el usuario ejecuta el programa con el comando `node index.js 2 hello world`, entonces "node" es el programa, "index.js" es el primer parámetro, "2" es el segundo parámetro, y "hello" y "world" son el tercer y cuarto parámetro respectivamente.
    * Puedes acceder a los parámetros de ejecución en tu programa usando el arreglo `process.argv`.
    * En el ejemplo, el proceso y el primer parámetro (índices 0 y 1 del arreglo `process.argv`) son "node" e "index.js", por lo que puedes ignorarlos.
    * El segundo parámetro (índice 2) es usado por este programa para determinar el número de la tarea a ejecutar, así que también puedes ignorarlo.
    * Puedes acceder al asunto y al mensaje usando `process.argv[3]` y `process.argv[4]` respectivamente.

3. Se te ha dado un constructor para un objeto Mail.
    * Modifica el código para que el usuario proporcione su propio asunto y mensaje como parámetros de ejecución en ese orden.
    * Luego, extiende el constructor para incluir un método `printMail()` que imprima lo siguiente en la Consola:
        * `<subj>: <msg>`
        * Por ejemplo, si las dos entradas son `hello` y `world`, la salida debe ser `hello: world`.

4. Para esta tarea, deberás escribir tu propio constructor.
    * Crea un constructor llamado Journey que tome dos parámetros: start y end.
    * Crea un par de constantes llamadas from y to, y asígnales los valores de los argumentos de la línea de comandos.


## Tareas Extra

Si completaste las tareas anteriores, intenta las siguientes para un desafío adicional:

5. Crea un constructor para un objeto FriendsList que almacene una lista de nombres en un arreglo.
    * Tu programa debe pedirle al usuario un número, luego pedir esa cantidad de veces para listar cada nombre uno por uno.
    * Tu programa debe imprimir el arreglo directamente en la consola.
        * La salida debe verse así: `[ 'name1', 'name2' ]`

6. ¿Puedes crear un constructor para un objeto que describa una lista de compras? Usa esta tarea para experimentar con constructores.
    * ¿Qué tan larga debe ser la lista?
        * No todos los usuarios querrán el mismo número de artículos.
    * ¿Cómo manejarías múltiples de un mismo artículo, como 2 botellas de leche o una docena de huevos?
    * ¿Cómo recopilarías estos datos del usuario?
    * ¿Cómo almacenarías estos datos en un objeto?
    * ¿Cómo se vería la función constructora para este objeto?

7. ¿Puedes crear un constructor para un objeto que describa un coche? Usa esta tarea para experimentar con constructores.
    * Piensa en qué datos debería tener el objeto, cómo los recopilarías del usuario y cómo los almacenarías.
        * ¿La marca, modelo y año?
        * ¿El color?
        * ¿El número de puertas?
        * ¿El kilometraje?
        * ¿Si es de combustión o eléctrico?
        * ¿Algo más?
