import { Singleton } from "./Singleton";
import { Profesor } from "./Profesor";
import { Observer } from "./Observer";

const profesor1 = new Profesor("Juan Pérez", 30, "Departamento de Informática", 100000);
const profesor2 = new Profesor("María García", 25, "Departamento de Matemáticas", 80000);

const singleton = new Singleton();
singleton.add(profesor1);
singleton.add(profesor2);

const observer = new Observer("José");
singleton.notifyObservers(observer);

// Proporciona un índice como argumento al llamar al método get
console.log(singleton.get(0));
