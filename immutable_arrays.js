// Aufgabe 2a
const myArray = [
    { id: 1, name: 'Max', age: 31, job: 'Entwickler' },
    { id: 2, name: 'Sara', age: 28, job: 'Designer' },
    { id: 3, name: 'Tom', age: 35, job: 'Manager' },
    { id: 4, name: 'Anna', age: 24, job: 'Marketing' },
    { id: 5, name: 'Lisa', age: 29, job: 'Data Scientist' }
];

console.log(myArray);

// Aufgabe 2b
const myUpdatedArray = [
    ...myArray,
    { id: 6, name: 'Peter', age: 32, job: 'Ingenieur' }
];

console.log(myUpdatedArray);

// Aufgabe 2c
const myChangedArray = myUpdatedArray.map(person =>
    person.id === 3
        ? { ...person, job: 'Senior Manager' }
        : person
);

console.log(myChangedArray);

// Aufgabe 2d
const smallestID = Math.min(...myChangedArray.map(person => person.id));

const myArrayWithoutTheSmallestID = myChangedArray.filter(person => person.id !== smallestID);

console.log(myArrayWithoutTheSmallestID);

// Aufgabe 2e
const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

const sum = reviews.reduce((acc, curr) => acc + curr, 0);

const average = sum / reviews.length;

console.log(average);

// Aufgabe 2f
const newReviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

function groupedAssessment(reviews) {
    const newSum = { good: 0, ok: 0, bad: 0 };

    newReviews.forEach(newReviews => {
        if (newReviews >= 4) {
            newSum.good++;
        } else if (newReviews >= 2.5) {
            newSum.ok++;
        } else {
            newSum.bad++;
        }
    });

    return newSum;
}

const endSum = groupedAssessment(newReviews);
console.log(endSum);



