module.exports = class Profiles {
    profilesName = 'Profiles'
    path = '/'

    constructor(){

    }
    getProfilesName() {
        return this.profilesName;
    }
    
    setProfilesName(value) {
        this.profilesName = value;
    }

    getPath() {
        return this.Path;
    }
    
    setPath(value) {
        this.Path = value;
    }
};