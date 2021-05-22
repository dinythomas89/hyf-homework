const { request } = require("express");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get('/calculator/add', (req, res) => {
    const addition = Object.values(req.query).flat()
        .reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue));
    if (isNaN(addition)) {
        res.status(400).json({ error: "Values must be an integer" });
        return;
    }
    res.send(`Addition: ${addition}`);
});

app.get('/calculator/subtract', (req, res) => {
    const subtraction = Object.values(req.query).flat()
        .reduce((accumulator, currentValue) => Number(accumulator) - Number(currentValue));
    if (isNaN(subtraction)) {
        res.status(400).json({ error: "Values must be an integer" });
        return;
    }
    res.send(`Subtraction: ${subtraction}`);
});

app.get('/calculator/multiply', (req, res) => {
    const multiplication = Object.values(req.query).flat()
        .reduce((accumulator, currentValue) => Number(accumulator) * Number(currentValue))
    if (isNaN(multiplication)) {
        res.status(400).json({ error: "Values must be an integer" });
        return;
    }
    res.send(`Multiplication: ${multiplication}`);
});

app.get('/calculator/divide', (req, res) => {
    const division = Object.values(req.query).flat()
        .reduce((accumulator, currentValue) => Number(accumulator) / Number(currentValue))
    if (isNaN(division)) {
        res.status(400).json({ error: "Values must be an integer" });
        return;
    }
    res.send(`Division: ${division}`);
});

app.post("/calculator/multiply", (req, res) => {
    const multiplication = Object.values(req.body).flat()
        .reduce((accumulator, currentValue) => Number(accumulator) * Number(currentValue));
    if (isNaN(multiplication)) {
        res.status(400).json({ error: "Values must be an integer" });
        return;
    }
    res.send(`Multiplication: ${multiplication}`);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
