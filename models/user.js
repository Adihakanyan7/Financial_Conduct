module.exports = class User {
    static users = []

    constructor(id, username = 'DefaultUser', viewPath, userPath) {
        this.id = id
        this.username = username;
        this.viewPath = viewPath;
        this.userPath = userPath;
        this.expenses = []
    }


    addExpense(date, product=null, paymentPlace=null, amount=null, description=null){
        const newExpense = {
            id : Math.random().toString(),
            date : date,
            product : product,
            paymentPlace : paymentPlace,
            amount : amount+ "$",
            description : description,
        };
        this.expenses.push(newExpense);
    }

    deleteExpense(id) {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
       
    }

    editExpense(id, newDate, newProduct, newPaymentPlace, newAmount, newDescription) {
        console.log("models -> user.js -> editExpense -> searching for id: ", id);
        console.log("models -> user.js -> editExpense -> expenses list: ", this.expenses);

        const expenseIndex = this.expenses.findIndex(exp => exp.id === id);
        console.log('models -> user.js -> editExpense -> expenseIndex: ', expenseIndex);

        if (expenseIndex !== -1) {
            this.expenses[expenseIndex] = {
                id: id,
                date: newDate || this.expenses[expenseIndex].date,
                product: newProduct || this.expenses[expenseIndex].product,
                paymentPlace: newPaymentPlace || this.expenses[expenseIndex].paymentPlace,
                amount: newAmount || this.expenses[expenseIndex].amount,
                description: newDescription || this.expenses[expenseIndex].description,
            };
        } else {
            console.log("Expense not found for editing.");
        }
    }


    static addUser(user){
        this.users.push(user);
    }

    static getUser(id){
        return this.users.find(user => user.id === id);
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
