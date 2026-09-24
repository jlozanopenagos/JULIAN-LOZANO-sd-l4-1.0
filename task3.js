export class Jugador {
  constructor(nombre, nivel) {
    this.nombre = String(nombre);
    this.nivel = Number(nivel);

    this.informacion = function(){
      return `${nombre} ha alcanzado el Nivel ${nivel}!`
    }
  }
}

/**
 * 3. Ahora se te ha pedido que incluyas un método que muestre una cadena en la consola anunciando una subida de nivel.
 * - Modifica la clase Jugador para que acepte una cadena de nombre de jugador y un número de nivel en dos argumentos separados.
 * - Luego, define un método de objeto compartido `informacion()` que imprima la siguiente cadena, reemplazando los dos marcadores de posición:
 *    - `<nombre> ha alcanzado el Nivel <nivel>!`
      - Un jugador llamado Tara en el nivel 6 debería resultar en "Tara ha alcanzado el Nivel 6!" impreso en la consola.

 */