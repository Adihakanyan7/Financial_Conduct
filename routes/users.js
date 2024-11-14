const express = require('express');
const usersControllers = require('../controllers/users');

const router = express.Router();


//Expenses 
// Route to add a new expense
router.post('/:userId/expenses/:type/add', (req, res, next) => {
    const { userId, type } = req.params;
    console.log('Current URL:', req.originalUrl); // Log the URL
    usersControllers.addExpense(userId, type,req, res, next);
});

// Route to delete an expense
router.post('/:userId/expenses/:type/delete/:expenseId', (req, res, next) => {
    const { userId, type } = req.params;
    console.log('Current URL:', req.originalUrl); // Log the URL
    usersControllers.deleteExpense(userId, type, req, res, next);
});

// Route to modify an expense
router.post('/:userId/expenses/:type/edit/:expenseId', (req, res, next) => {
    const { userId, type } = req.params;
    console.log('Current URL:', req.originalUrl); // Log the URL
    usersControllers.editExpense(userId, type,req, res, next);
});

router.get('/:userId/expenses/:type', (req, res, next) => {
    const { userId, type } = req.params;
    console.log('Current URL:', req.originalUrl); // Log the URL
    usersControllers.getExpensesPage(userId, type, req, res, next);
});


//Users
router.get("/:userId", (req, res, next) => {
    console.log('Current URL:', req.originalUrl); // Log the URL
    usersControllers.getUserPage(req, res, next);
});

module.exports = router;
