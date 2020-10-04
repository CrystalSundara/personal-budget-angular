const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const port = 3000;

app.use(cors());

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    const budget = JSON.parse(fs.readFileSync('myBudget.json', 'utf8'));
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
