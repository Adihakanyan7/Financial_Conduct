const {user1, user2 ,shared} = require('../util/data');

exports.getProfilePage = (req, res, next) =>{
    res.render('profiles', {
        user1Name: user1.getUsername(),
        user2Name: user2.getUsername(),
        sharedName: shared.getUsername()
     });
};

exports.postUpdateUserName = (req, res, next) => {
    if (req.body.user1Name) {
        user1.setUsername(req.body.user1Name);
    };
    if (req.body.user2Name) {
        user2.setUsername(req.body.user2Name)
    };

    res.redirect('/');
}