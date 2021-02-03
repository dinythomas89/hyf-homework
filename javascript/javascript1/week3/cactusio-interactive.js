//Adding an activity
const activities=[];
function addActivity(date,activity,duration) {
    const activityDetail= {date:date, activity:activity, duration:duration};
    activities.push(activityDetail);    
}
addActivity("2/2/21", "Youtube", 10);
addActivity('2/2/21','Facebook',15);
addActivity('3/2/21','Cartoon', 20);
console.log(activities);

//Show my status & usage limit
function showStatus(arrayOfActivities,limit) {
    let totalDuration=0;
    if(arrayOfActivities.length===0){
        console.log('Add some activities before calling showStatus');
    }
    else{
        for(let status of arrayOfActivities){    
            totalDuration+= status.duration;    
        }
        console.log(`You have added ${arrayOfActivities.length} activities. They amount to ${totalDuration} min. of usage`);
        if (limit<totalDuration) {
            console.log('You have reached your limit, no more smartphoning for you!')
        }
    }
}
showStatus(activities,50);


