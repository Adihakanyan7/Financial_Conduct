const path = require('path');
const { urlencoded } = require('body-parser');
const express = require('express');
const bodyParser = require('body-parser');

const { getProfilesName } = require('./util/data');
const profilesRoutes = require('./routes/profiles');
const user1Routes = require('./routes/user1');
const user2Routes = require('./routes/user2');
const sharedRoutes = require('./routes/shared');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended: false})); // Parsing the body of the request
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user1', user1Routes);
app.use('/user2', user2Routes);
app.use('/shared', sharedRoutes);
app.use('/', profilesRoutes); // Mounting profilesRoutes as the root route



app.use((req, res, next) =>{
    res.status(404).render('404', {profilesName: getProfilesName()});
});


app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});
