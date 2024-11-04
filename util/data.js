const User = require('../models/user');
const Profiles = require('../models/profiles');

const user1 = new User('User1', 'user1', '/user1');
const user2 = new User('User2', 'user2', '/user2');
const shared = new User('Shared', 'shared', '/shared');
const profiles = new Profiles();


// Export the instances so they can be used in controllers
module.exports = {
    user1,
    user2,
    shared,
    profiles
};