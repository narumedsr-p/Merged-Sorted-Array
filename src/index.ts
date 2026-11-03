import { merge } from "./merge";

const collection1 = [1, 4, 7, 10];
const collection2 = [2, 5, 8];
const collection3 = [9, 6, 3, 0];

console.log("collection1:", collection1);
console.log("collection2:", collection2);
console.log("collection3:", collection3);
console.log("merged:", merge(collection1, collection2, collection3));
