console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

//Displaying products in productsUl
function renderProducts(products) {
    let productLi, productName, productPrice, productRating;
    products.forEach(product => {
        productLi = document.createElement('li');
        productName = document.createElement('h2');
        productPrice = document.createElement('p');
        productRating = document.createElement('p');

        productName.innerHTML = product.name;
        productPrice.innerHTML = `Price: ${product.price}`;
        productRating.innerHTML = `Rating: ${product.rating}`;


        productLi.appendChild(productName);
        productLi.appendChild(productPrice);
        productLi.appendChild(productRating)
        productsUl.appendChild(productLi);
    });
}
renderProducts(products);


//Searching a product 
const searchBox = document.querySelector('.search input');
searchBox.addEventListener('keyup', myFunction);
function myFunction() {
    const searchBoxValue = searchBox.value.toLowerCase();
    const filteredArray = products.filter(product => {
        if (product.name.toLowerCase().includes(searchBoxValue)) {
            productsUl.innerHTML = '';
            return product.name;
        }
    })
    console.log(filteredArray);
    renderProducts(filteredArray);
}


//searching by price
const priceSearch = document.querySelector('.price-search input');
priceSearch.addEventListener('keyup', searchByPrice);
function searchByPrice() {
    const priceSearchValue = priceSearch.value;
    const filteredArray = products.filter(product => {
        if (product.price < priceSearchValue) {
            productsUl.innerHTML = '';
            return product.price;
        }
    })
    console.log(filteredArray);
    renderProducts(filteredArray);
}


//Sorting of products based on price, name and rating
//Getting the user input by using radio button for sorting and displaying them
const radioButton = document.querySelectorAll(".sort input")
console.log(radioButton);
for (let i = 0; i < radioButton.length; i++) {
    radioButton[i].addEventListener('click', () => {
        let selectAreaValue = radioButton[i].value;

        let sortedProducts;
        if (selectAreaValue === 'rating') {
            sortedProducts = products.sort(sortByRating);
            console.log(sortedProducts);
        }
        else if (selectAreaValue === 'name') {
            sortedProducts = products.sort(sortByName);
            console.log(sortedProducts);
        }
        else if (selectAreaValue === 'price') {
            sortedProducts = products.sort(sortByPrice);
            console.log(sortedProducts);
        }
        productsUl.innerHTML = '';
        renderProducts(sortedProducts);
    })
}

//sorting by name
function sortByName(a, b) {
    const productA = a.name.toLowerCase();
    const productB = b.name.toLowerCase();
    let comparison;
    if (productA > productB)
        comparison = 1;
    else if (productA < productB)
        comparison = -1;
    else comparison = 0;
    return comparison;
}

//sorting by rating
function sortByRating(a, b) {
    const ratingA = a.rating;
    const ratingB = b.rating;
    return ratingA - ratingB;
}

//sorting by price
function sortByPrice(a, b) {
    const priceA = a.price;
    const priceB = b.price;
    return priceA - priceB;
}

