//1
window.addEventListener('load', (event) => {
    setTimeout(() => {
        console.log('Called after 2.5 seconds');
    }, (2500));
});

//2
function displayString(delay, stringToLog) {
    setTimeout(() => {
        console.log(stringToLog)
    }, delay * 1000);
}
displayString(3, 'This string is logged after 3 seconds');
displayString(5, 'This string is logged after 5 seconds');

//3
const button1 = document.getElementById('btn1');
button1.addEventListener('click', () => {
    displayString(5, 'Called after 5 seconds');
});

//4
const earthLogger = () => {
    console.log('Its me,Earth');
};
const saturnLogger = () => {
    console.log('Its me,Saturn');
};
function planetLogFunction(planetLog) {
    planetLog();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5
const button2 = document.getElementById('btn2');
const locationDetails = document.getElementById('location-details');
button2.addEventListener('click', getLocation);
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        locationDetails.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    locationDetails.innerHTML = "This is the latitude: " + position.coords.latitude +
        "<br>This is the longitude: " + position.coords.longitude;
}

//6

//7
function runAfterDelay(delay, callback) {
    setTimeout(() => {
        callback();
    }, delay * 1000);
}
runAfterDelay(4, function () {
    console.log('should be logged after 4 seconds');
});
runAfterDelay(7, function () {
    console.log('should be logged after 7 seconds');
});

//8
document.addEventListener('dblclick', () => {
    console.log('double click');
});

//9
const logFunnyJoke = () =>
    console.log('Ha ha ha..so funny');
const logBadJoke = () =>
    console.log('Thats a bad joke');
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
}
jokeCreator(true, logFunnyJoke, logBadJoke);



//Function as a variable
//1
function function1() {
    console.log('Function1');
}
function function2() {
    console.log('Function2');
}
function function3() {
    console.log('Function3');
}
const arrayOfFunctions = [function1(), function2(), function3()];
arrayOfFunctions.forEach(item => item);

//2
const simpleFunction1 = () => {
    console.log('simple Function with const');
}
simpleFunction1();
simpleFunction2();
function simpleFunction2() {
    console.log('Simple function with function keyword');
}

//3
const obj = {
    name: function displayName() {
        console.log('My name is Diny');
    },
};
obj.name();

