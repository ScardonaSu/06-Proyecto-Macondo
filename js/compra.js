let saldo = 2500000
const compra = () =>{

    const elijeCompra = prompt("Elige una opcion: 1. Almojabana 2. Subway")
    


    if (elijeCompra === '1') {
      
      const facturaAlmojabana = saldo - 15000;
      alert(
        `le caerá mal porque lleva mucho en el stand y su saldo es: $ ${facturaAlmojabana}`
      );
    } else if (elijeCompra === '2') {

      const facturaSubway = saldo - 23000;

      alert(`Estará llenito y bieny su saldo es: $ ${facturaSubway}`);

    } else {

      alert(`Le tocara comprar algo en Medellín y su saldo es: $ ${saldo}`);
    }


}



/* Medias de maleta de mano */

const mediaMaleta = ()=>{

  const medidasEstandarAlto = 55;
  const medidasEstandasLargo = 40;
  const mediasEstandasAncho = 20;

  const medidasPasajeroAlto = 60;
  const medidasPasajeroLargo = 44;
  const medidasPasajeroAncho = 20;

  const calculoAlto = medidasEstandarAlto / medidasPasajeroAlto;
  const calucloLargo = medidasEstandasLargo / medidasPasajeroLargo;
  const calculoAncho = mediasEstandasAncho / medidasPasajeroAncho;

  console.log(calculoAlto);


  const calculoMaleta = Math.min(calculoAlto, calculoAncho, calucloLargo);

  console.log(calculoMaleta);

  const nuevoAlto = medidasPasajeroAlto * calculoMaleta;
  const nuevoLargo = medidasPasajeroLargo * calculoMaleta;
  const nuevoAncho = medidasPasajeroAncho * calculoMaleta;

  console.log(nuevoAlto);



  alert(`Las medias son: ${nuevoAlto.toFixed(0)} de alto, ${nuevoLargo.toFixed(0)} de largo y ${nuevoAncho.toFixed(0)} de ancho `)



}

/* Coneccion Wifii */

const wifi = () => {

  const horaWifi = 50000

  const Pass01 = "01110010";
  const Pass02 = "01101001";
  const Pass03 = "01110111";
  const Pass04 = "01101001";

  const convertirPass01 = parseInt(Pass01, 2)
  const convertirPass02 = parseInt(Pass02, 2)
  const convertirPass03 = parseInt(Pass03, 2)
  const convertirPass04 = parseInt(Pass04, 2)

  const caracter01 = fromCharCode(convertirPass01)
  const caracter02 = String.fromCharCode(convertirPass02)
  const caracter03 = String.fromCharCode(convertirPass03)
  const caracter04 = String.fromCharCode(convertirPass04)

  alert(
    `La constraseña es: ${caracter01} ${caracter02} ${caracter03} ${caracter04}`
  );
  alert(`El saldo actual es: ${saldo - horaWifi}`);



}

const lengua = ()=> {

  const texto = "Taxi me puede llevar al hotel mariposas amarillas"

  const traducir = texto.replace(/[aeiou]/g, 'i')

  alert(traducir);

}



/* Apuesta Taxi */

const taxi = ()=> {
  const tarifaTaxi = 300000;

  const apuesta = parseInt(
    prompt("Elija la apuesta: 1) Gana  2) Pierde 3) Empata")
  );

  if (apuesta === 1) {
    alert("No tiene que pagar nada, no paga nada");
  } else if (apuesta === 2) {
    alert(
      `Pierte y tiene que pagar: 300.000 su saldo es: ${saldo - tarifaTaxi}`
    );
  } else if (apuesta === 3) {
    alert("Es un empate");
  }
}



  const tipoColores = (()=> {

    const colores = prompt('Elija:  1) Amarillo 2) Verde 3) Rojo 4) Azul')
  
    switch (colores) {
      case "amarillo":
        const piscina = prompt('Se va a meter a la piscina? : "Si", "No"');
        if (piscina == "si") {
          alert(
            "si se mete, empieza a sentirse ahogado, demasiado cloro, muere"
          );
        } else {
          alert("No pasa nada");
        }
        break;
  
      case "verde":
        const caminata = prompt('Vas par una caminata: "Si", "No"');
        if (caminata == "si") {
          alert("ira a una hermosa cascada y se tomara fotos");
        } else {
          alert(
            "llegará a cierto punto, y se devolverá solo, y den noche se pierde"
          );
        }
        break;
  
      case "rojo":
        const playa = prompt('Vas par una caminata: "Si", "No"');
        if (playa == "si") {
          alert("voleibol, juega y la pasa genial");
        } else {
          alert("nada en el mar, y monta moto");
        }
        break;
  
      case "azul":
        const hotel = prompt('Actividades en el hotel: "Bingo", "Bailar" o "Casino"');
        if (hotel == "bingo") {
          alert("voleibol, juega y la pasa genial");
        } else if (hotel == "bailar") {
          alert("bailar, y la pasa muy bien");
        }else if(hotel === "casino"){
          alert('casino y apuesta, y solo se queda con pasaje de regreso (terminan las vacaiones')
        }
        break;
  
      default:
        break;
    }
  })






  const condicionalObject = () => {

    const adversario = "Lovezno";
    const loki_disfraces = {
      "Iron-man": "Magneto",
      Thor: "Odin",
      Hulk: "Thanos",
      Lovezno: "Magneto",
    };


    const default_disfraz = "Loki";
    
    const loki = loki_disfraces[adversario] || default_disfraz;
    
    console.log(loki);
  }
  
  
  /* 
  Todo Arrow Funcion o funcion de flecha VS. funcion tradicional
  */
 


/* 
  ? Mi nombre
*/


//!refactorizado



/* 
  ? Mi suma
*/


//!refactorizado




/* 
  ? mis frutas favoritas
*/















































































/* 
  Ejericio: realizar la tabla del x numero e imprimirlo del 0 al 10 con backtikc ` `
  y con arrow funcion o funcion de flecha

  observaciones: 
  -Lo pueden hacer con un promp o sino con un numero quemado 
  -Dicho numero debe de imprimir la tabla
  -En los backtick puede ir `7 X 2 = 14`

*/





