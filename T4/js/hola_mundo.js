console.log("Codigo ejecutado desde el fichero htmnl con js embebido dentro");
console.log("Seguna línea de codigo");

//NO TIPADO
// Segun su posibilidad de cambio -> constante *final
const DNI="124124";

// Segun su ambito de accion --> desde donde se pueden acceder. Se puede acceder desde cualquier parte, pierdo la encapsulación.
var nombre= "Manuel"
if (true){
    console.log(nombre);
    var edad = 40;
    let correo= "manuel@correo.com";
}

console.log(edad);
console.log(correo);

let numero =6; //asi lo declaro
numero= 4.8;
console.log(typeof numero);

// Segunel dato que guarda -> primarias/complejas 
//numeros -->int--> number (int, float,double, byte)
//palabras ->String->string
//boolean->boolean
//char -string
//Array-> array estáticos->Object
//null->null
//let nombre: null
//String nombre; //null
// nombre.lenght
//NaN -> Not a Number

/* tenr el nodo*/
/*Obtengo un nodo que cumpla con el selector  (querySelector -> Node)
TAG (nombre tag)
,ID, CLASS

ID ("#id")
, CLASS (".nombreClase")
*/
let parrafo =document.querySelector ("p");
parrafo.textContent = "Cambiando el contenido del parrafo mediante JS";
/*SI QUIERO ENCONTRAR UNO TIENE MAS SENTIDO ID*/
let parrafoDos = document.querySelector ("#parrafo-dos");
parrafoDos.textContent = "Este cambio va a verse en el parrafo dos"
let parrafoTres= document.querySelector(".parrafos");
parrafoTres.textContent= "Este cambio va a verse en el parrafo tres";

/*Obtengo TODOS  nodos que cumpla con el selector 
 querySelectorAll() ->Nodelis (Tiene mas sentido trabajar con clases o etiquetas)
*/
let parrafos = document.querySelectorAll ("p"); //[n1,n2,n3,n3]
/* quiero cam,iar el tecto de todo los parrafos y ponerlo en cargando*/
for (let index = 0; index < parrafos.length; index++) {
    parrafos[index].textContent= "cargando";
    
}
parrafos.array.forEach((item, index) => {
    item.textContent =`Cargando parrafo ${index + 1}`;
});

let input



//////////////////////////////////////////////////////////////
