const dogYearOfBirth = 2015;
const dogYearFuture = 2025;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
const humanDogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
if(shouldShowResultInDogYears === true){
    console.log('Your dog will be ' + dogYear + ' dog years old in ' +dogYearFuture);
}
else{
    console.log('Your dog will be ' + humanDogYear + ' human years old in ' + dogYearFuture);
}


