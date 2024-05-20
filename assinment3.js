
//question1
const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
    'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];


function removeVowelStart(states) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];

   
    const filteredStates = states.filter(state => {
        const firstChar = state.charAt(0).toUpperCase();
        return !vowels.includes(firstChar);
    });

    return filteredStates;
}


const filteredStates = removeVowelStart(states);


console.log("States after removing names starting with vowels:");
console.log(filteredStates);
//question2
let str = 'I love my India';


let words = str.split(' ');


let reversedWords = words.reverse();

let reversedString = reversedWords.join(' ');


console.log(reversedString); 
//question3
let string = 'INDIA';


let chars = string.split('');


chars.splice(3, 0, 'N', 'E', 'S', 'I', 'A');


let result = chars.join('');


console.log(result); 
//question4
function countVowelsAndConsonants(str) {
    
    str = str.toLowerCase();

  
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = 'bcdfghjklmnpqrstvwxyz'; 

   
    let vowelCount = 0;
    let consonantCount = 0;


    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (consonants.includes(char)) {
            consonantCount++;
        }
    }

    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}


const str = 'Hello, how are you doing today? This is a sample string.';
const counts = countVowelsAndConsonants(str);


console.log("String:", str);
console.log("Vowel Count:", counts.vowels);
console.log("Consonant Count:", counts.consonants);
//question5
function correctFn(sentence, wrong, correct) {
    
    const regex = new RegExp(`\\b${wrong}\\b`, 'gi');

    const correctedSentence = sentence.replace(regex, correct);

    return correctedSentence;
}

const sentence = "I lovee JavaScript, it's my favourite language.";
const wrongWord = "lovee";
const correctWord = "love";
const correctedSentence = correctFn(sentence, wrongWord, correctWord);

console.log("Original Sentence:", sentence);
console.log("Corrected Sentence:", correctedSentence);
//question6
const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];


const answer = inputArr.filter(num => num > 5);

console.log(answer); 
//question7
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map(student => {
    const sum = student.scores.reduce((acc, score) => acc + score, 0);
    const average = sum / student.scores.length;
    return { name: student.name, average: average };
});

// Output the result
console.log(output);
//question8
function repeatedSumOfDigits(num) {
   
    while (num >= 10) {
        let str = num.toString();
        let sum = 0;
        
        for (let digit of str) {
            sum += parseInt(digit);
        }
        
        num = sum;
    }
    
    return num;
}

const number = 456;
const result = repeatedSumOfDigits(number);

console.log(`The single digit sum of ${number} is: ${result}`);
//question9
function countWords(paragraph) {
    paragraph = paragraph.trim().replace(/\s+/g, ' ');

    const words = paragraph.split(' ');

    const wordCount = words.length;

    return wordCount;
}

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
const count = countWords(paragraph);

console.log(`Number of words in the paragraph: ${count}`);
//question10
function reverseString(str) {
    let reversedStr = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
}

const input = 'Hello';
const reversed = reverseString(input);

console.log(`Input: ${input}`);
console.log(`Reversed: ${reversed}`);
//question11
const students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

function calculateAverage(student) {
    const subjects = Object.values(student); 
    const total = subjects.reduce((acc, score) => acc + score, 0); 
    const average = total / subjects.length; 

    return { average }; 
}

const output = students.map(studentObj => {
    const studentKey = Object.keys(studentObj)[0]; 
    const averageObj = calculateAverage(studentObj[studentKey]); 
    return { [studentKey]: averageObj };
});


console.log(output);









