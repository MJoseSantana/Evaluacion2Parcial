import { Profesor } from "./Profesor";

/**
 * La clase Observer representa un observador de la colección de profesores.
 * Puede ser notificado de los cambios en la colección.
 */
export class Observer {
    // El nombre del observador.
    public nombre: string;

    // El constructor de la clase Observer.
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    /**
     * Es notificado de los cambios en la colección.
     * @param profesor El profesor que ha sido agregado o eliminado de la colección.
     * @param action La acción que se está realizando (agregar o eliminar un profesor).
     */
    public notified(profesor: Profesor, action: "add" | "remove") {
        if (action === "add") {
            console.log(`El profesor ${profesor.nombre} ha sido agregado a la colección.`);
        } else if (action === "remove") {
            console.log(`El profesor ${profesor.nombre} ha sido eliminado de la colección.`);
        }
    }
}