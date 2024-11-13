const path = require('path');
const { urlencoded } = require('body-parser');
const express = require('express');
const bodyParser = require('body-parser');

const testRoutes = require('./routes/test');
const profilesRoutes = require('./routes/profiles');
const user1Routes = require('./routes/users');
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended: false})); // Parsing the body of the request
app.use(express.static(path.join(__dirname, 'public')));


app.use('/test', testRoutes); 
app.use('/users', user1Routes);
app.use('/', profilesRoutes); // Mounting profilesRoutes as the root route



app.use(errorController.get404);


app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});
