const {user1, user2 ,shared, profiles} = require('../util/data');

const userPaths = {
    user1Path: user1.getUserPath(),
    user2Path: user2.getUserPath(),
    sharedPath: shared.getUserPath()
}

exports.getUser1Page = (req, res, next) =>{
    res.render(user1.getViewPath(), { 
        user1Name: user1.getUsername(),
        path: user1.getUserPath(),
        user2Name: user2.getUsername(),
        sharedName: shared.getUsername(),
        profilesName: profiles.getProfilesName(),
        userPaths : userPaths
    });
 }

 
exports.getUser2Page = (req, res, next) =>{
    res.render(user2.getViewPath(), { 
        user1Name: user1.getUsername(),
        path: user2.getUserPath(),
        user2Name: user2.getUsername(),
        sharedName: shared.getUsername(),
        profilesName: profiles.getProfilesName(),
        userPaths : userPaths
    });
 }

 exports.getSharedPage = (req, res, next) =>{
    res.render(shared.getViewPath(), { 
        user1Name: user1.getUsername(),
        path: shared.getUserPath(),
        user2Name: user2.getUsername(),
        sharedName: shared.getUsername(),
        profilesName: profiles.getProfilesName(),
        userPaths : userPaths
    });
 }