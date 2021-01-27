//weather fuction
function whatToWear(temperature){    
    if(temperature<=5)
        return 'winter jackets,sweaters,scarfs and mittens';
    else if(temperature>5 && temperature<=15)
        return 'jackets and scarfs';             
    else if(temperature>15 && temperature<=25)
        return 'sweaters and jeans';
    else
        return 't-shirts and shorts';        
}
const clothesToWear = whatToWear(18);
console.log(clothesToWear); 