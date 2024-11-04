// Initial values
let user1Name = 'User1';
let user2Name = 'User2';
let profilesName = 'Profiles';
let sharedName = 'Shared';
let pathUser1 = '/user1';
let pathUser2 = '/user2';
let pathShared = '/shared';
let path404 = '/404';

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

function getPathUser1() {
    return pathUser1;
}

function getPathUser2() {
    return pathUser2;
}

function getPathShared() {
    return pathShared;
}

function getPath404() {
    return path404;
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

function setPathUse1(newPath) {
    pathUser1 = newPath || '/user1';
}

function setPathUse2(newPath) {
    pathUser2 = newPath || '/user2';
}

function setPathShared(newPath) {
    pathShared = newPath || '/shared';
}

function setPath404(newPath) {
    path404 = newPath || '/404';
}
module.exports = {
    getUser1Name,
    getUser2Name,
    getProfilesName,
    getSharedName,
    getPathUser1,
    getPathUser2,
    getPathShared,
    getPath404,
    setUser1Name,
    setUser2Name,
    setProfilesName,
    setSharedName,
    setPathUse1,
    setPathUse2,
    setPathShared,
    setPath404
};
