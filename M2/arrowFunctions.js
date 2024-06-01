/* Diferencia entre Function y Arrow(flecha)*/

function sumar (a, b){
 return a + b;
}

const suma = (a, b) => a + b;

console.log(suma(3,4));

const arrayNum = [1,2,3,4,5,6,7,8,9,10];

const pares = arrayNum.filter((num) => num % 2 == 0);

console.log(pares);

/* Diferencia entre Function y Arrow(flecha) usando el método THIS*/

const persona = {
    nombre: "Juan",
    amigos: ["Maria", "Jose", "Fabian"],

    saludar: function() {
        console.log("Hola, soy "+this.nombre);
    },

    despedir: () => {
        console.log("Nos vemos "+this.nombre);
    }, 
};

persona.saludar();
