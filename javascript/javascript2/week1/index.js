//Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
getShortestWord(danishWords);

function getShortestWord(words) {
    let shortestWord = '';
    for (let i = 0; i < words.length; i++) {
        if (shortestWord.length == 0) {
            shortestWord = words[i];
            continue;
        }
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
    }
    console.log(shortestWord);
}


//Find and count the Danish letters
const danishLetters = ['å', 'æ', 'ø'];
const obj = {};

function getDanishLetters(str) {
    let sum = 0;
    const splittedString = str.split('');
    for (let i = 0; i < danishLetters.length; i++) {
        let count = 0;
        for (let j = 0; j < splittedString.length; j++) {
            if (danishLetters[i] === splittedString[j]) {
                count++;
            }
        }
        sum = sum + count;
        obj.total = sum;
        obj[danishLetters[i]] = count;
    }
    console.log(obj)
}

const danishString = "Jeg har en blå bil";
getDanishLetters(danishString); // returns {total: 1, å: 1}
const danishString2 = "Blå grød med røde bær";
getDanishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}


//spirit animal name generator
const spiritAnimals = ['Bear', 'Butterfly', 'Cougar', 'Dolphin', 'Dragon', 'Eagle', 'Horse', 'Ladybug', 'Rabbit', 'Wolf'];
const userEnteredName = document.querySelector('#userName');
const submit = document.querySelector('#submit');
const displayAnimal = document.getElementById('printAnimal');
submit.addEventListener('click', getSpiritAnimalName);

function getSpiritAnimalName() {
    let userName = userEnteredName.value;
    let index = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
    if (userName === '')
        displayAnimal.innerHTML = 'Please enter a valid name'
    else
        displayAnimal.innerHTML = userName + "-" + index;
}



