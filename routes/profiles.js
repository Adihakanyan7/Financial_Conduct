const express = require('express');
const profileController = require('../controllers/profiles.js'); 
const User = require('../models/user.js')
const router = express.Router();


router.get("/",profileController.getProfilePage);

router.post('/update-names', profileController.postUpdateUserName);

router.post('/user1/edit-username', (req, res) => {
    const newUsername = req.body.username;
    const user1 = User.getUser('user1')
    user1.setUsername(newUsername)
    res.redirect('/'); // Redirect back to the profiles page
});

router.post('/user2/edit-username', (req, res) => {
    const newUsername = req.body.username;
    const user2 = User.getUser('user2')
    user2.setUsername(newUsername)
    res.redirect('/'); // Redirect back to the profiles page
});

module.exports = router;

