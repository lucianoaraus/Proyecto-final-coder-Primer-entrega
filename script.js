//Scripts
/* >>Objetivos Generales:
1. Codificar la funcionalidad inicial del simulador. 
2. Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas por el usuario, procesamiento esencial del simulador y notificación de resultados en forma de salida.

>>Objetivos Específicos:
1. Capturar entradas mediante prompt().
2. Declarar variables y objetos necesarios para simular el proceso seleccionado.
3. Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).
4. Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().
 */

//PROYECTO FINAL - Simulador de batalla Star Wars

//Constructor y funciones
class Campeon {
  constructor(nombre, daño, vida, bando) {
    this.nombre = nombre;
    this.daño = daño;
    this.vida = vida;
    this.bando = bando;
  }
  atacar(enemigo) {
    //Cubrir caso de muerte
    enemigo.vida -= this.daño;
    console.log("Hiciste " + this.daño + " puntos de daño");
    if (enemigo.vida > 0) {
      console.log(enemigo.nombre + ": " + enemigo.vida + " puntos de vida");
    } else {
      console.log(
        enemigo.nombre +
          " queda fuera de combate, " +
          this.nombre +
          "es el ganador"
      );
    }
  }
  usarHabilidad() {
    //Cubrir caso de limites
    if (this.bando == "Oscuridad") {
      this.daño += 150;
      console.log("Daño +150");
      console.log("Tu daño ascendio a " + this.daño);
    } else {
      this.vida += 300;
      console.log("Vida +300");
      console.log("Tu vida ascendio a " + this.vida);
    }
  }

  habilidadEspecial() {
    //Si es Darth Vader o Luke, tendria una habilidad especial
    //TODO: Solucionar undefined
    if (this.name === "Luke Skywalker") {
      this.vida += 750;
      console.log("Usaste Habilidad Especial!");
      console.log("Vida +750");
      console.log("Tu vida ascendio a " + this.vida);
    } else if (this.name === "Darth Vader") {
      this.daño += 1000;
      console.log("Usaste Habilidad Especial!");
      console.log("LORD ETERNO");
      console.log("Daño aumentado +1000");
      console.log("Tu daño ascendio a " + this.daño);
    }
  }
}

//Instanciacion
let luke = new Campeon("Luke Skywalker", 120, 1100, "Luz");
let yoda = new Campeon("Maestro Yoda", 110, 1500, "Luz");
let leia = new Campeon("Princesa Leia", 90, 1000, "Luz");
let vader = new Campeon("Darth Vader", 150, 1200, "Oscuridad");
let obiWan = new Campeon("Obi Wan", 105, 1100, "Luz");
let boba = new Campeon("Boba Fett", 100, 1100, "Oscuridad");

const campeones = [luke, yoda, leia, vader, obiWan, boba];
const nombreCampeones = campeones.map((champ) => champ.nombre);

//Comienzo del juego
alert("Bienvenido al Simulador de Batalla de Star Wars...");
alert("Preparate para luchar con adversarios de toda la Galaxia... 🌌");
alert("Cargando...");
alert("Elige a tu campeon, joven...");
console.log("Campeones disponibles: " + nombreCampeones);

let campeonElegido = "";
let campeon = "";

do {
  campeonElegido = prompt("Elige: " + nombreCampeones);
  campeon = campeones.find((champ) => champ.nombre == campeonElegido);
  console.log("Campeon elegido: " + campeonElegido);
  console.log(campeon);
  alert("Has elegido a " + campeonElegido);
  break;
} while (!nombreCampeones.includes(campeonElegido));

alert("Elige a tu contrincante...");
let adversarioElegido = "";
let adversario = "";

do {
  adversarioElegido = prompt("Elige: " + nombreCampeones);
  adversario = campeones.find((champ) => champ.nombre == adversarioElegido);
  console.log("Contrincante elegido: " + adversarioElegido);
  console.log(adversario);
  alert("Has elegido a " + adversarioElegido);
  break;
} while (!nombreCampeones.includes(adversarioElegido));

alert("3");
alert("2");
alert("1");
alert("PELEA!");

alert("(El campo de batalla es en la consola...)");

console.log(
  "Comandos: 1. Indica el nombre de tu campeon en minusculas, 2. Usa la funcion atacar(nombreAdversario) o usarHabilidad() o la habilidadEspecial() que solo algunos tienen..., 3. Indica el nombre de tu adversario en minusculas, 4. Usa la funcion atacar(nombreDeTuCampeon) o usarHabilidad() o la habilidadEspecial()"
);
console.log("El ultimo en morir gana...");
console.log("Pelea!");
