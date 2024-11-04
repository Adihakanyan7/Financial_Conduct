const {user1, user2 ,shared, profiles} = require('../util/data');


exports.get404 = (req, res, next) =>{
    res.status(404).render('404', { 
        user1Name: user1.getUsername(),
        user2Name: user2.getUsername(),
        profilesName: profiles.getProfilesName(),
        sharedName: shared.getUsername(),
        path: '/404'
    });
};


       