const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get('/numbers/add', (req, res) => {
    const first = parseInt(req.query.first);
    const second = parseInt(req.query.second);
    if ((!isNaN(first)) && (!isNaN(second))) {
        res.send(`sum: ${first + second}`);
    }
    else {
        res.status(400).send('The values must be integers');
    }
});

app.get('/numbers/multiply/:first/:second', (req, res) => {
    const first = parseInt(req.params.first);
    const second = parseInt(req.params.second);
    if ((!isNaN(first)) && (!isNaN(second))) {
        res.send(`multiplication: ${first * second}`);
    }
    else {
        res.status(400).send('The values must be integers');
    }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
