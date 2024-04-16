const express = require('express');
const router = express.Router();
const fibonacci = require('../helper/fibonacci');
const pokemonMap = require('../data/pokemonMap');


// Define routes
router.get('/catch', (req, res) => {
    let hasil = Math.random();
   
   
    if (hasil > 0.5) {
        return res.send({ catched: true });
    } else {
        return res.send({ catched: false });
    }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

router.get('/release', (req, res) => {
    let getRandomNumber = getRandomInt(1, 100); 
    if (isPrime(getRandomNumber)) {
        return res.send({ released: true });
    } else {
        return res.send({ released: false });
    }
});



router.post('/rename', (req, res) => {


    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Name is required.' });
    }

    // Check if the Pokemon exists in the map
    if (!pokemonMap.has(name)) {
        pokemonMap.set(name, 0); // Initialize the count if not exists
    }

    // Get the current count for renaming
    let count = pokemonMap.get(name);

    // Generate the new name based on the count and Fibonacci sequence
    const newName = `${name}-${fibonacci(count)}`;

    // Update the count in the map
    pokemonMap.set(name, count + 1);

    return res.status(200).json({ newName });
});



module.exports = router;