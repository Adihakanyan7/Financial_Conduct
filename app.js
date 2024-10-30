const path = require('path');

const { urlencoded } = require('body-parser');
const express = require('express');
const bodyParser = require('body-parser');

const homeRoutes = require('./routes/home');
const adiRoutes = require('./routes/adi');

const app = express();

app.use(bodyParser.urlencoded({extended: false})); // Parsing the body of the request
app.use(express.static(path.join(__dirname, 'public')));

app.use(adiRoutes);
app.use(homeRoutes);


app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3000);
