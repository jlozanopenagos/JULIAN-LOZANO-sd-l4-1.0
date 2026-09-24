export class Jugador {
  constructor(nombre, nivel) {
    this.nombre = String(nombre);
    this.nivel = Number(nivel);

    this.informacion = function(){
      return `${nombre} ha alcanzado el Nivel ${nivel}!`
    }
    this.subirNivel = function(){
      return nivel++;
    }
  }
}

/**
 * 4. Ahora se te ha pedido que incluyas un método para subir de nivel a un jugador, incrementando su número de nivel en uno.
    - Modifica la clase Jugador para que acepte una cadena de nombre de jugador y un número de nivel en dos argumentos separados.
    - Luego, define un método de objeto compartido `informacion()` que muestre la siguiente cadena:
        - `<nombre> ha alcanzado el Nivel <nivel>!`
    - Finalmente, define un segundo método de objeto compartido llamado `subirNivel()` que incrementará el nivel del Jugador.


 */