
//create a button,input elements and image display div
const userInput = document.getElementById('user-input');
const limitOfImages = document.getElementById('limit');
const button = document.getElementById('btn');
const displayDiv = document.getElementById('display');

//event listener for button click
button.addEventListener('click', (event) => {
    displayDiv.innerHTML = ''
    const searchText = userInput.value;
    const numberOfImagesToDisplay = limitOfImages.value;
    //created an api key for fetching url 
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=pAvLnVXnC6fuqEVLzVF6FN3B8B78FLQN&limit=${numberOfImagesToDisplay}`)
        .then(response => response.json())
        .then(giphy => {
            console.log(giphy);
            const ul = document.createElement('ul');
            displayDiv.appendChild(ul);
            //the fetched data is an object 
            //getting the url array from the object fetched
            const gifArray = giphy.data;
            gifArray.forEach(element => {
                const li = document.createElement('li');
                const image = document.createElement('img');
                ul.appendChild(li);
                li.appendChild(image);
                console.log(element.images.downsized.url)
                image.src = element.images.downsized.url;
            });
        })
});

