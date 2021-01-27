//candy helper 
let boughtCandyPrices = [];
let amountToSpend = Math.random()*100;

function addCandy(candyType, weight){
    let priceOfCandy;
    switch(candyType){
        case 'sweet':
            priceOfCandy = 0.5;
            break;
        case 'chocolate':
            priceOfCandy=0.7
            break;
        case 'toffe':
            priceOfCandy = 1.1;
            break;
        case 'chewing-gum':
            priceOfCandy=0.03
            break;   
    }
    boughtCandyPrices.push(weight*priceOfCandy);
}

function canBuyMoreCandy(){
    let sum=0;
    for(let price of boughtCandyPrices)
        sum=sum+price;
    if(sum<amountToSpend)
    console.log('You can buy more, so please do!');
    else
    console.log('Enough candy for you');
}

addCandy('sweet', 20);
addCandy('toffe',10);
addCandy('chocolate',15);
canBuyMoreCandy();