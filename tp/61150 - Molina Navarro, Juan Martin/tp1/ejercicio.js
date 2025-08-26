import {prompt, read, write} from './io.js';

class Contacto {
    #id
    #nombre
    #apellido
    #edad
    #telefono
    #email
    /* implementar */
}

class Agenda {
    #contactos = []
    #proximoId = 1

    /* implementar */
    
    toJson() { return this.#contactos  /*implementar*/ } 
    static fromJson(json) { return new Agenda() /*implementar*/ }
}

//
// --- Ejemplo de uso ---
//
let agenda = Agenda.fromJson(await read('./agenda.json'));

console.log("=== Ingresar nuevo contacto ===");
let nombre = await prompt("Nombre:>");
let edad   = await prompt("Edad  :>");
console.log(`nombre: ${nombre}, edad: ${edad}`);

await write(agenda.toJson(), './agenda.json');
