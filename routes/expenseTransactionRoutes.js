const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const ExpenseTransaction = mongoose.model('ExpenseTransaction');

module.exports = (app) => {
  app.post('/api/createExpense', requireLogin, async (req, res) => {
    const { date, amount, title, description, cattegory } = req.body;

    const expenseTransaction = new ExpenseTransaction({
      _user: req.user.id,
      date,
      amount,
      title,
      description,
      cattegory
    });

    await expenseTransaction.save();
    res.send(expenseTransaction);
  });
};