//Movies
async function movies() {
    let movies = await fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json');
    let moviesData = await movies.json();
    console.log(moviesData);
    const badMovies = moviesData.filter(movie => movie.rating < 6);
    console.log(badMovies);
    const badMoviesAfter2000 = moviesData.filter(movie => movie.rating < 6 && movie.year > 2000);
    console.log(badMoviesAfter2000);
}
movies();


//Promise that resolves after set time
function promiseFunctionForSetTime(resolveAfter) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, resolveAfter * 1000);
    })
    return promise;
}
promiseFunctionForSetTime(3).then(() => {
    console.log('I am called asynchronously');
})

//using async/await
async function asyncFunctionForSetTime(resolveAfter) {
    try {
        setTimeout(() => {
            console.log('I am called asynchronously');
        }, resolveAfter * 1000);
    } catch (error) {
        console.log('there is an error');
    }
}
asyncFunctionForSetTime(4);


//Rewrite time
function setTimeoutPromise(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    })
}
function getCurrentLocation() {
    return new Promise(resolve => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getLocation);
        }
        function getLocation(position) {
            const location = `latitude: ${position.coords.latitude} longitude: ${position.coords.longitude}`;
            resolve(location);
        }
    })
}

setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
});

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });


//Fetching and waiting
//using Promise
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve(fetch('https://yesno.wtf/api'));
    }, 3000);
})
promise
    .then((response) => response.json())
    .then((yesOrNo) => {
        console.log(yesOrNo.answer);
    })

//using async/await
async function fetchingData() {
    try {
        await promise;
        const response = await fetch('https://yesno.wtf/api');
        const yesOrNo = await response.json();
        console.log(yesOrNo.answer);
    } catch (error) {
        console.error('error');
    }
}
fetchingData();



