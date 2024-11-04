const express = require('express');
const profileController = require('../controllers/profiles.js'); 

const router = express.Router();


router.get("/",profileController.getProfilePage);

router.post('/update-names', profileController.postUpdateUserName);

module.exports = router;