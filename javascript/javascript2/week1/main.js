console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
    let list_ul = document.createElement('ul');
    let main = document.querySelector('main');
    let list_li;
    main.appendChild(list_ul);
    for (let i = 0; i < products.length; i++) {
        list_li = document.createElement('li');
        list_li.innerHTML = "<b>" + products[i].name + "</b>" + "<br>"
            + "Price: " + products[i].price + "<br>"
            + "Rating: " + products[i].rating;
        list_ul.appendChild(list_li);
    }
}

renderProducts(products);