import { Profesor } from "./Profesor";
import { Observer } from "./Observer";

/**
 * La clase Singleton representa una colección de profesores.
 * Solo se puede crear una instancia de la clase.
 */
export class Singleton {
    // La colección de profesores.
    private collection: Profesor[];

    /**
     * El constructor de la clase Singleton.
     * Es privado para evitar que se puedan crear otras instancias de la clase.
     */
    constructor() {
        this.collection = [];
    }

    /**
     * Agrega un profesor a la colección.
     * @param profesor El profesor a agregar.
     */
    public add(profesor: Profesor) {
        this.collection.push(profesor);
    }

    /**
     * Elimina un profesor de la colección.
     * @param profesor El profesor a eliminar.
     */
    public remove(profesor: Profesor) {
        this.collection.splice(this.collection.indexOf(profesor), 1);
    }

    /**
     * Obtiene un profesor de la colección.
     * @param index El índice del profesor a obtener.
     * @returns El profesor en el índice especificado.
     */
    public get(index: number): Profesor {
        return this.collection[index];
    }

    /**
     * Notifica a todos los observadores de un cambio en la colección.
     * Llama al método `notified` del objeto `Observer` especificado.
     * @param observer El objeto `Observer` que notificó al profesor de un cambio en la colección.
     */
    public notifyObservers(observer: Observer) {
        // Notifica a todos los observadores de un cambio en la colección.
        this.collection.forEach((profesor: Profesor) => {
            profesor.notified(observer);
        });
    }

    /**
     * Verifica si un profesor está presente en la colección.
     * @param profesor El profesor a verificar.
     * @returns Verdadero si el profesor está presente en la colección, falso en caso contrario.
     */
    public contains(profesor: Profesor): boolean {
        return this.collection.includes(profesor);
    }
}
