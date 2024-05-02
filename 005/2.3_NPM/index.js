import generateName from "sillyname";
import superheroes from "superheroes";

const sillyName = generateName();

console.log(sillyName);

const superheroName = superheroes.random();

console.log(`I am ${superheroName}`);
