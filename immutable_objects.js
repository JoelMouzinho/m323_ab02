// Aufgabe 1b
const myVariable = 123;

console.log(myVariable);

// Aufgabe 1c
const myObject = {
    name: "Joel",
    age: 19,
    isAlive: true
}

console.log(myObject);

// Aufgabe 1d
const myUpdatedObject = {
    ...myObject,
    surname: "Cid Mouzinho"
}

console.log(myUpdatedObject);

// Aufgabe 1e
const myChangedObject = {
    ...myUpdatedObject,
    age: 20
}
console.log(myChangedObject);

// Aufgabe 1f
const {surname, ...myDeletedObject} = myChangedObject

console.log(myDeletedObject);