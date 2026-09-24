export class Jugador {
  constructor(nombre, nivel) {
    this.nombre = String(nombre);
    this.nivel = Number(nivel);
  }
}

/*
  * 2. Ahora se te ha pedido que mejores tu código, para que los objetos jugador 
       puedan definir tanto un nombre como un número de nivel.- Modifica la clase Jugador para 
       que acepte una cadena de "nombre" de Jugador y un número de "nivel" en dos argumentos separados.
        - La clave de esta propiedad en el objeto resultante DEBE ser "nivel". Recuerda, ¡los computadores son muy literales!
*/