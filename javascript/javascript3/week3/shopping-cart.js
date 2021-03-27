const userName = document.querySelector('h2');
const ul = document.querySelector('ul');

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    convertToCurrency(currency) {
        if (currency === "dollars") {
            const dkkToDollar = 6.28;
            this.price = this.price / dkkToDollar;
            return this.price;
        } else if (currency === "pound") {
            const dkkToPound = 8.62;
            this.price = this.price / dkkToPound;
            return this.price;
        } else if (currency === "euro") {
            const dkkToEuro = 7.43;
            this.price = this.price / dkkToEuro;
            return this.price;
        }
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(product) {
        const index = this.products.indexOf(product);
        this.products.splice(index, 1);
    }
    searchProduct(productName) {
        this.products.forEach((items) => {
            if (items.name == productName) {
                console.log(`${items.name} is in your list`);
            }
        })
    }
    getTotal() {
        let sum = 0;
        this.products.forEach(element => {
            sum += element.price;
        });
        return sum;
    }
    renderProducts() {
        this.getUser().then((data) => userName.innerHTML = data.name);
        this.products.forEach(element => {
            const li = document.createElement('li');
            ul.appendChild(li);
            const h2 = document.createElement('h3');
            h2.innerHTML = element.name;
            li.appendChild(h2);
            const span = document.createElement('span');
            span.innerHTML = 'Price: ' + element.price;
            li.appendChild(span);
        });

        const total = this.getTotal();
        const price = document.getElementById("total");
        price.innerHTML = "Total price: " + total;
    }
    getUser() {
        const fetchPromise = fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => {
                return data;
            });
        return fetchPromise
    }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
const mobilePhone = new Product("mobile-phone", 4000);
shoppingCart.addProduct(mobilePhone);
const printer = new Product("printer", 2000);
shoppingCart.addProduct(printer);
const camera = new Product("camera", 8000);
shoppingCart.addProduct(camera);
const tablet = new Product("tablet", 4500);
shoppingCart.addProduct(tablet);
const keyboard = new Product("keyboard", 800);
shoppingCart.addProduct(keyboard);
const mouse = new Product("mouse", 600);
shoppingCart.addProduct(mouse);
const television = new Product("television", 12000);
shoppingCart.addProduct(television);
shoppingCart.removeProduct(printer);
shoppingCart.getTotal();
shoppingCart.renderProducts();
shoppingCart.searchProduct('mouse');
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("euro"));
