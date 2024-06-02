class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.amigos = [];
        this.sentado = true;
    }

    agregarAmigos(nombreAmigo) {
        this.amigos.push(nombreAmigo);
    }

    estaSentado() {
        this.sentado = true;
    }

    estaParado() {
        this.sentado = false;
    }
}

const persona1 = new Persona("Fernando", 33);

console.log(persona1);

persona1.agregarAmigos("Juan");
persona1.agregarAmigos("Maria");
persona1.estaParado();

console.log(persona1);