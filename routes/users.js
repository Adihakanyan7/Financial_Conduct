const express = require('express');
const usersControllers = require('../controllers/users');

const router = express.Router();

// Route to add a new expense
router.post('/:userId/expenses/add', (req, res, next) => {
    console.log('Current URL:', req.originalUrl); // Log the URL
    usersControllers.addExpense(req, res, next);
});

// Route to delete an expense
router.post('/:userId/expenses/delete/:expenseId', (req, res, next) => {
    console.log('Current URL:', req.originalUrl); // Log the URL
    usersControllers.deleteExpense(req, res, next);
});

// Route to modify an expense
router.post('/:userId/expenses/edit/:expenseId', (req, res, next) => {
    console.log('Current URL:', req.originalUrl); // Log the URL
    usersControllers.editExpense(req, res, next);
});

router.get('/:userId/expenses', (req, res, next) => {
    console.log('Current URL:', req.originalUrl); // Log the URL
    usersControllers.getExpensesPage(req, res, next);
});

router.get("/:userId", (req, res, next) => {
    console.log('Current URL:', req.originalUrl); // Log the URL
    usersControllers.getUserPage(req, res, next);
});

module.exports = router;
