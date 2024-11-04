const {user1, user2 ,shared, profiles} = require('../util/data');

exports.getUser1Page = (req, res, next) =>{
    res.render(user1.getViewPath(), { 
        user1Name: user1.getUsername(),
        path: user1.getActive(),
        user2Name: user2.getUsername(),
        sharedName: shared.getUsername(),
        profilesName: profiles.getProfilesName(),
    });
 }

 
exports.getUser2Page = (req, res, next) =>{
    res.render(user2.getViewPath(), { 
        user1Name: user1.getUsername(),
        path: user2.getActive(),
        user2Name: user2.getUsername(),
        sharedName: shared.getUsername(),
        profilesName: profiles.getProfilesName(),
    });
 }

 exports.getSharedPage = (req, res, next) =>{
    res.render(shared.getViewPath(), { 
        user1Name: user1.getUsername(),
        path: shared.getActive(),
        user2Name: user2.getUsername(),
        sharedName: shared.getUsername(),
        profilesName: profiles.getProfilesName(),
    });
 }