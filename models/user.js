module.exports = class User {
    
    username = 'DefaultUser';
    viewPath = '/';
    active = '';

    constructor(username, viewPath, active) {
        if (username) {
            this.username = username;
        }
        if (viewPath) {
            this.viewPath = viewPath;
        }
        if (active) {
            this.active = active
        }
    }

    getUsername() {
        return this.username;
    }

    setUsername(newName) {
        this.username = newName; 
    }

    getViewPath() {
        return this.viewPath;
    } 

    setViewPath(viewPath) {
        this.viewPath = viewPath;
    }

    getActive() {
        return this.active;
    }
    
    setActive(active) {
        this.Active = active;
    }
    
}
