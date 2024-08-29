// Aufgabe 3a
const studentGrades = [
    { name: 'Joe', grade: 88 },
    { name: 'Jen', grade: 94 },
    { name: 'Steph', grade: 77 },
    { name: 'Allen', grade: 60 },
    { name: 'Gina', grade: 54 }
];

const createFeedbackMessage = (name) => (letterGrade) => {
    switch (letterGrade) {
        case 'a':
            return `Excellent Job ${name}, you got an ${letterGrade}`;
        case 'b':
            return `Nice Job ${name}, you got an ${letterGrade}`;
        case 'c':
            return `Well done ${name}, you got an ${letterGrade}`;
        case 'd':
            return `What happened ${name}, you got an ${letterGrade}`;
        case 'f':
            return `Not good ${name}, you got an ${letterGrade}`;
        default:
            return `Invalid grade for ${name}`;
    }
};

const determineLetterGrade = (score) => {
    if (score >= 90) return 'a';
    if (score >= 80) return 'b';
    if (score >= 70) return 'c';
    if (score >= 60) return 'd';
    return 'f';
};

const generateFeedback = (grades) => {
    return grades.map(student => {
        const letterGrade = determineLetterGrade(student.grade);
        const feedback = createFeedbackMessage(student.name)(letterGrade);
        return feedback;
    });
};

const studentFeedback = generateFeedback(studentGrades);
console.log(studentFeedback);

// Aufgabe 3b
const R = require('ramda');

const messages = [
  'Welcome',
  'Goodbye',
  'Hello',
  'See you later',
  'Have a nice day'
];

const addPrefix = R.curry((prefix, str) => `${prefix} ${str}`);

const addGreetingPrefix = addPrefix('Greeting:');

const prefixedMessages = R.map(addGreetingPrefix, messages);

console.log(prefixedMessages);

// Aufgabe 3c

// Impure function
let globalArray = [1, 2, 3, 4, 5];

function getArrayLength() {
    return globalArray.length;
}

console.log(getArrayLength());

// Pure function
function getArrayLengthPure(arr) {
    return arr.length;
}

const myArray = [1, 2, 3, 4, 5];
console.log(getArrayLengthPure(myArray));


