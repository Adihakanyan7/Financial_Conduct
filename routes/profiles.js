const express = require('express');
const { getUser1Name, getUser2Name, setUser1Name, setUser2Name, getSharedName } = require('../util/data');


const router = express.Router();


router.get("/",(req, res, next) =>{
    res.render('profiles', {
        user1Name: getUser1Name(),
        user2Name: getUser2Name(),
        sharedName: getSharedName()
     });
});


router.post('/update-names', (req, res) => {
    console.log("Received POST request to /update-names");
    
    if (req.body.user1Name) {
        setUser1Name(req.body.user1Name)
    };
    if (req.body.user2Name) {
        setUser2Name(req.body.user2Name)
    };

    // Additional logging to confirm name update
    console.log("Updated User1 Name:", getUser1Name());
    console.log("Updated User2 Name:", getUser2Name());

    res.redirect('/');
});

// Debugging: Log the updated names to verify
console.log("Updated User1 Name:", getUser1Name());
console.log("Updated User2 Name:", getUser2Name());

module.exports = router;