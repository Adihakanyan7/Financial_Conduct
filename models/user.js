module.exports = class User {
    
    username = 'DefaultUser';
    viewPath = '/';
    userPath = '';
    

    constructor(username, viewPath, userPath) {
        if (username) {
            this.username = username;
        }
        if (viewPath) {
            this.viewPath = viewPath;
        }
        if (userPath) {
            this.userPath = userPath;
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

    getUserPath() {
        return this.userPath;
    }
    
    setUserPath(userPath) {
        this.userPath = userPath;
    }
    
}
