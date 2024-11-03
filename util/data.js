// Initial values
let user1Name = 'User1';
let user2Name = 'User2';
let profilesName = 'Profiles';
let sharedName = 'Shared';

// Functions to get the current values
function getUser1Name() {
    return user1Name;
}

function getUser2Name() {
    return user2Name;
}

function getProfilesName() {
    return profilesName;
}

function getSharedName() {
    return sharedName;
}

// Functions to update the values
function setUser1Name(newName) {
    user1Name = newName || 'User1';
}

function setUser2Name(newName) {
    user2Name = newName || 'User2';
}

function setProfilesName(newName) {
    profilesName = newName || 'Profiles';
}

function setSharedName(newName) {
    sharedName = newName || 'Shared';
}

module.exports = {
    getUser1Name,
    getUser2Name,
    getProfilesName,
    getSharedName,
    setUser1Name,
    setUser2Name,
    setProfilesName,
    setSharedName
};
