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

class Doctor extends Persona { /*Extends es debido a que hereda todas las propiedades de la clase Padre*/
    constructor (nombre, edad, nMatricula){
        super(nombre, edad);/*Es la forma de llamar al constructor de la clase Padre ya que sino no reconoce los parametros de dicha clase y genera error*/
        this.nMatricula = nMatricula;
    }
}

const doctor1 = new Doctor("Francisco", 61, 3456453);

console.log(doctor1);

doctor1.agregarAmigos("Pedro");

console.log(doctor1);