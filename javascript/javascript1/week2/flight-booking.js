//Flight booking
function getFullName(firstName, surName){
    return firstName+' '+surName;
}
let fullName1=getFullName("Benjamin", "Hughes");
let fullName2=getFullName("Iza", "David");
console.log(fullName1);
console.log(fullName2);

//formal fullname
function getFormalFullname(firstName, surName,useFormalName=true,gender){
    if(firstName==='' || surName==='')
        console.log('enter valid name');
    else if(gender==='male'){
        if(useFormalName)
        console.log('Lord '+ firstName+' '+surName);
        else
        console.log(firstName+' '+surName);
    }
    else{
        if(useFormalName)
        console.log('Miss '+firstName+' '+surName);
        else
        console.log(firstName+' '+ surName);
    }
}
getFormalFullname('Annie','James',true,'female');
getFormalFullname('John','Joseph',false,'male');
getFormalFullname('Chris','William',true,'male');
getFormalFullname('');
getFormalFullname('Susan','Paul',false, 'female');
getFormalFullname('Jerry','');
getFormalFullname('Susan','Paul',false, 'female');

