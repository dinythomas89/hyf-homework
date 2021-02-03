//Item array removal
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = "Ahmad";
const indexOfNameToRemove= names.indexOf(nameToRemove);
names.splice(indexOfNameToRemove,1);
console.log(names);



//when will we be there?
//https://www.webdeveloper.com/d/273645-how-to-convert-decimal-time-value-to-hhmm/2

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
}; 
function getTime(travelInfo) {
    const time=travelInfo.destinationDistance/travelInfo.speed;
    const hours=parseInt(Number(time));
    const minutes=Math.round((Number(time)-hours) * 60);
    return hours+' hours and '+minutes+' minutes';
}
const travelTime = getTime(travelInformation);
console.log(travelTime);


//series duration of my life
//1 yr=525600 minutes
//1 day=1440 minutes
const seriesDurations = [
    {
      title: 'Downton Abbey',
      days: 2,
      hours: 3,
      minutes: 42,
    },
    {
      title: 'The Bay',
      days: 0,
      hours: 9,
      minutes: 0,
    },
    {
      title: 'Outlander',
      days: 2,
      hours: 19,
      minutes: 0,
    },
];
const totalMinutesIn80Years= 80*525600;
function logOutSeriesText() {
    let totalDurationOfSeries=0;
    for(let series of seriesDurations){
        const seriesDurationInMinutes=(series.days*1440)+(series.hours*60)+series.minutes;
        const seriesDurationInPercentage=((seriesDurationInMinutes/totalMinutesIn80Years)*100).toFixed(3);
        console.log(`${series.title} took ${seriesDurationInPercentage}% of my life`);
        totalDurationOfSeries+=seriesDurationInMinutes;
    }
    const totalPercentageOfSeries=((totalDurationOfSeries/totalMinutesIn80Years)*100).toFixed(3);
    console.log(`In total that is ${totalPercentageOfSeries}% of my life`)
}
logOutSeriesText();