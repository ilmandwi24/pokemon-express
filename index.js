const express = require('express');
const app = express();

const ENV = 'development';
const DOMAIN = ENV === 'development' ? 'localhost' : '';
const PORT = process.env.PORT || 3000;;
const path = require('path');

app.use(express.json({ extended: false }));

const routes = require('./routes/route');


app.use(express.static(path.resolve(__dirname, 'client/dist')));

app.use('/api', routes);


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/dist', 'index.html'));
});
app.listen(PORT, `${DOMAIN}`, () => {
    console.log(`Server listening on port ${PORT}`);
});
