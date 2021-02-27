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
            sortedProducts = products.sort((a, b) => a.rating - b.rating);
        }
        else if (selectAreaValue === 'name') {
            sortedProducts = products.sort((a, b) => a.name < b.name ? -1 : 1);
        }
        else if (selectAreaValue === 'price') {
            sortedProducts = products.sort((a, b) => a.price - b.price);
        }
        productsUl.innerHTML = '';
        renderProducts(sortedProducts);
    })
}

