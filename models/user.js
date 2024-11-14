module.exports = class User {
    static users = []

    constructor(id, username = 'DefaultUser', viewPath, userPath) {
        this.id = id
        this.username = username;
        this.viewPath = viewPath;
        this.userPath = userPath;
        this.variableExpenses = []; // Separate array for variable expenses
        this.currentExpenses = [];  // Separate array for current expenses
        this.fixedExpenses = [];    // Separate array for fixed expenses
    }


    addExpense(type ,date, product=null, paymentPlace=null, amount=null, description=null){
        const newExpense = {
            id : Math.random().toString(),
            date : date,
            product : product,
            paymentPlace : paymentPlace,
            amount : amount+ "$",
            description : description,
        };
        switch (type) {
            case 'variable':
                this.variableExpenses.push(newExpense);
                console.log("models -> user.js -> addExpense -> variable list: ", this.variableExpenses);
                break;
            case 'current':
                this.currentExpenses.push(newExpense);
                console.log("models -> user.js -> addExpense -> current list: ", this.currentExpenses);
                break;
            case 'fixed':
                this.fixedExpenses.push(newExpense);
                console.log("models -> user.js -> addExpense -> fixed list: ", this.fixedExpenses);
                break;
            default:
                console.log("Unknown expense type");
        }
        //this.expenses.push(newExpense);
    }

    deleteExpense(type, id) {
        switch (type) {
            case 'variable':
                this.variableExpenses = this.variableExpenses.filter(expense => expense.id !== id);
                console.log("models -> user.js -> deleteExpense -> variable list: ", this.variableExpenses);
                break;
            case 'current':
                this.currentExpenses = this.currentExpenses.filter(expense => expense.id !== id);
                console.log("models -> user.js -> deleteExpense -> current list: ", this.currentExpenses);
                break;
            case 'fixed':
                this.fixedExpenses = this.fixedExpenses.filter(expense => expense.id !== id);
                console.log("models -> user.js -> deleteExpense -> fixed list: ", this.fixedExpenses);
                break;
            default:
                console.log("Unknown expense type");
        }
        
       
    }

    editExpense(type, id, newDate, newProduct, newPaymentPlace, newAmount, newDescription) {
        console.log('models -> user.js -> editExpense -> type: ', type)
        let expensesType; 
        // Determine the correct array based on type
        switch (type) {
            case 'variable':
                expensesType = this.variableExpenses;
                break;
            case 'current':
                expensesType = this.currentExpenses;
                break;
            case 'fixed':
                expensesType = this.fixedExpenses;
                break;
            default:
                console.log("Unknown expense type");
                return;
        }
        console.log("models -> user.js -> editExpense -> searching for id: ", id);
        console.log("models -> user.js -> editExpense -> expenses list: ", expensesType);
        const expenseIndex = expensesType.findIndex(exp => exp.id === id);
        console.log('models -> user.js -> editExpense -> expenseIndex: ', expenseIndex);

        if (expenseIndex !== -1) {
            expensesType[expenseIndex] = {
                id: id,
                date: newDate || expensesType[expenseIndex].date,
                product: newProduct || expensesType[expenseIndex].product,
                paymentPlace: newPaymentPlace || expensesType[expenseIndex].paymentPlace,
                amount: newAmount + "$" || expensesType[expenseIndex].amount + "$",
                description: newDescription || expensesType[expenseIndex].description,
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
