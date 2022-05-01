const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const ExpenseTransaction = mongoose.model('ExpenseTransaction');

module.exports = (app) => {
  app.post('/api/createExpense', requireLogin, async (req, res) => {
    try {
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

    } catch (e) {
      res.status(400).send({error: e});
    }
  });

  app.get('/api/getAllExpense', requireLogin, async (req, res) => {
    try {
      const expenses = await ExpenseTransaction.find({ _user: req.user.id });
      res.send(expenses);
    } catch (e) {
      res.status(400).send({ error: e });
    }
  });

  app.get('/api/getExpense/:id', requireLogin, async (req, res) => {
    try {
      const { id } = req.params;
      const expense = await ExpenseTransaction.find({ _user: req.user.id, _id: id })
      res.send(expense);
    } catch (e) {
      res.status(400).send({ error: e });
    }
  });

  app.delete('/api/deleteExpense/:id', requireLogin, async (req, res) => {
    try {
      const { id } = req.params;
      const expense = await ExpenseTransaction.findOneAndDelete({ _user: req.user.id, _id: id });
      res.send(expense);
    } catch (e) {
      res.status(400).send({ error: e });
    }
  });

};