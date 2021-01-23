const firstWords = ['Word', 'Fresh', 'Brand', 'Name', 'Quick', 'Innovative', 'Domain', 'Brand', 'One', 'Biz'];
const secondWords = ['Lab', 'Books', 'Root', 'Station', 'Solutions', 'Creations', 'Puzzler', 'Bucket', 'Click', 'Namez'];
let randomNumber = Math.floor(Math.random() * firstWords.length);
let startupName = firstWords[randomNumber] + secondWords[randomNumber];
console.log('The startup: '+startupName+' contains '+startupName.length+' characters');