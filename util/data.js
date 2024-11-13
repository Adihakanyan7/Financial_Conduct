const User = require('../models/user');
const Profiles = require('../models/profiles');

const user1 = new User('user1', 'User1', 'user1', '/user1'); // username, viewPath, userPath
const user2 = new User('user2', 'User2', 'user2', '/user2');
const shared = new User('shared', 'Shared', 'shared', '/shared');
const profiles = new Profiles();

User.addUser(user1);
User.addUser(user2);
User.addUser(shared);

// Export the instances so they can be used in controllers
module.exports = {
    user1,
    user2,
    shared,
    profiles
};