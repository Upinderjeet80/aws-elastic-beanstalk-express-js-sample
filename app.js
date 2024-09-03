const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('Welcome to Upinderjeet Cloud Journey5, We have also added the review stage!'));
=======
app.get('/', (req, res) => res.send('Welcome to Upinderjeet Cloud Journey3 After adiiing the review stage!'));
>>>>>>> e71c4b9b5ed38850a33853baef122e07e09d8593

app.listen(port);
console.log(`App running on http://localhost:${port}`);
