//Event application
let arr=['sunday','monday','tuesday','wednesday','thrusday','friday','saturday'];
console.log(getEventWeekday(9)); 
console.log(getEventWeekday(4));

function getEventWeekday(noOfDaysToEvent){
    let todaysDate=new Date();
    let eventDay=todaysDate.getDay()+noOfDaysToEvent;
    return arr[eventDay%7];
}