//first fetch the data from the api using fetch
//it was in json format. so parsing it to JS object

fetch('https://random.dog/woof.json')
.then(response=>response.json())
.then(catFacts=>{
    console.log(catFacts)
})

/*
the output which is an object will look like this
{
    "fileSizeBytes": 114081,
    "url": "https://random.dog/99922971-447f-4785-b5fe-db96f9938994.jpg"
}
 */