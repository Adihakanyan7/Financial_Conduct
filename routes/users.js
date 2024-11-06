const express = require('express');
const usersControllers = require('../controllers/users')

const router = express.Router();

//router.get("/:userPath",usersControllers.getUser1Page);

router.get("/test",(req, res, next) =>{
    res.render('test');
});

router.get("/user1",usersControllers.getUser1Page);

router.get("/user2",usersControllers.getUser2Page);

router.get("/shared",usersControllers.getSharedPage);



module.exports = router;