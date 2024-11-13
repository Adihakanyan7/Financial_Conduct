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
exports.getExpensesPage = (req, res) => {
    const { userId } = req.params;
    const user = User.getUser(userId);
    if (user) {
        res.render('users/expenses', { 
            user: user,
            user1Name: user1.getUsername(),
            user2Name: user2.getUsername(),
            sharedName: shared.getUsername(),
            profilesName: profiles.getProfilesName(),
            userPaths: userPaths,
            path: user.getUserPath(), 
        });
    } else {
        res.status(404).send('User not found');
    }
};

// Add expense
exports.addExpense = (req, res, next) => {
    const { userId } = req.params;
    const { date, product, paymentPlace, amount, description } = req.body;
    const user = User.getUser(userId);
    if (user) {
        user.addExpense(date, product, paymentPlace, amount, description);
        res.redirect(`/users/${userId}/expenses`); // Redirect to expenses page
    } else {
        res.status(404).send('User not found');
    }
};

// Delete expense
exports.deleteExpense = (req, res) => {
    const { userId, expenseId } = req.params;

    const user = User.getUser(userId);
    if (user) {
        user.deleteExpense(expenseId.toString());
        res.redirect(`/users/${userId}/expenses`); // Redirect to expenses page
    } else {
        res.status(404).send('User not found');
    }
};

// Modify expense
exports.editExpense = (req, res) => {
    const { userId, expenseId } = req.params;
    const { date, product, paymentPlace, amount, description } = req.body;
    //console.log(req.body);
    //console.log("controllers -> user.js -> editExpense -> req.params[userId, expenseId], req.body[date, product, paymentPlace, amount, description]", req.params, req.body)
    const user = User.getUser(userId);
    if (user) {
        user.editExpense(expenseId.toString(), date, product, paymentPlace, amount, description);
        res.redirect(`/users/${userId}/expenses`); // Redirect to expenses page
    } else {
        res.status(404).send('User not found');
    }
};
