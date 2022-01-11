import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([-2 , 1 , 0 , 10 , 100]);
numbersCollection.sort();
console.log(numbersCollection);

const charactersCollection = new CharactersCollection('baaxs');
charactersCollection.sort();
console.log(charactersCollection.data);
