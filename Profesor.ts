/**
 * La clase Profesor representa a un profesor.
 * Tiene los atributos nombre, edad, departamento y salario.
 */
import { Observer } from "./Observer"
export class Profesor {
    
    ///El nombre del profesor.
    public nombre: string;
  
    //La edad del profesor.
    public edad: number;
  
    //El departamento del profesor.
    public departamento: string;
  
    //El salario del profesor.
    public salario: number;
  
    /**
     * Es notificado de un cambio en la colección.
     * Llama al método `notified` del objeto `Observer` especificado.
     *
     * @param observer El objeto `Observer` que notificó al profesor de un cambio en la colección.
     */
    public notified(observer: Observer) {
      console.log(`El profesor ${this.nombre} ha sido agregado o eliminado de la colección.`);
    }
  
    constructor(nombre: string, edad: number, departamento: string, salario: number) {
      this.nombre = nombre;
      this.edad = edad;
      this.departamento = departamento;
      this.salario = salario;
    }
  }
  