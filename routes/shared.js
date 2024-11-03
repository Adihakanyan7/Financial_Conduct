const express = require('express');
const { getUser1Name, getUser2Name, getProfilesName, getSharedName } = require('../util/data');


const router = express.Router();


router.get("/",(req, res, next) =>{
    res.render('shared', { 
        user1Name: getUser1Name(),
        user2Name: getUser2Name(),
        profilesName: getProfilesName(),
        sharedName: getSharedName() 
    });
 });



module.exports = router;