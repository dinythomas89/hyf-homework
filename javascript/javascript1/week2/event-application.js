//Event application
let arr=['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
console.log(getEventWeekday(9)); 
console.log(getEventWeekday(4));

function getEventWeekday(noOfDaysToEvent){
    let todaysDate=new Date();
    let eventDay=todaysDate.getDay()+noOfDaysToEvent;
    return arr[eventDay%7];
}