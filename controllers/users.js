const User = require("../models/user");
const { user1, user2, shared, profiles } = require('../util/data');

const userPaths = {
    user1Path: user1.getUserPath(),
    user2Path: user2.getUserPath(),
    sharedPath: shared.getUserPath()
};

// Get user page
exports.getUserPage = (req, res, next) => {
    const userId = req.params.userId;
    const user = User.getUser(userId); 

    res.render('users/' + user.getViewPath(), { 
        user1Name: user1.getUsername(),
        user2Name: user2.getUsername(),
        sharedName: shared.getUsername(),
        profilesName: profiles.getProfilesName(),
        userPaths: userPaths,
        path: user.getUserPath(),
    });
};

// Get expenses page
exports.getExpensesPage = (userId, type, req, res) => {
    const user = User.getUser(userId);
    if (user) {
        const expenses = user[`${type}Expenses`] || [];
        res.render('users/expenses', { 
            user: user,
            user1Name: user1.getUsername(),
            user2Name: user2.getUsername(),
            sharedName: shared.getUsername(),
            profilesName: profiles.getProfilesName(),
            userPaths: userPaths,
            path: user.getUserPath(), 
            type,
            expenses,
        });
    } else {
        res.status(404).send('User not found');
    }
};

// Add expense
exports.addExpense = (userId, type, req, res, next) => {
    const { date, product, paymentPlace, amount, description } = req.body;
    const user = User.getUser(userId);
    if (user) {
        user.addExpense(type, date, product, paymentPlace, amount, description);
        res.redirect(`/users/${userId}/expenses/${type}`); // Redirect to expenses page
    } else {
        res.status(404).send('User not found');
    }
};

// Delete expense
exports.deleteExpense = (userId, type, req, res) => {
    console.log('Controllers -> users.js -> deleteExpense : hit !!')
    const { expenseId } = req.params;
    const user = User.getUser(userId);
    if (user) {
        user.deleteExpense(type, expenseId.toString());
        res.redirect(`/users/${userId}/expenses/${type}`); // Redirect to expenses page
    } else {
        res.status(404).send('User not found');
    }
};

// Modify expense
exports.editExpense = (userId, type, req, res) => {
    const { expenseId } = req.params;
    const { date, product, paymentPlace, amount, description } = req.body;
    //console.log(req.body);
    //console.log("controllers -> user.js -> editExpense -> req.params[userId, expenseId], req.body[date, product, paymentPlace, amount, description]", req.params, req.body)
    const user = User.getUser(userId);
    if (user) {
        user.editExpense(type, expenseId.toString(), date, product, paymentPlace, amount, description);
        res.redirect(`/users/${userId}/expenses/${type}`); // Redirect to expenses page
    } else {
        res.status(404).send('User not found');
    }
};
