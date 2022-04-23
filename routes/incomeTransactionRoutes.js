const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const IncomeTransaction = mongoose.model('IncomeTransaction');

module.exports = (app) => {
  // create new income
  app.post('/api/createIncome', requireLogin, async (req, res) => {
    try {
      const { date, amount, title, description, cattegory } = req.body;

      const incomeTransaction = new IncomeTransaction({
        _user: req.user.id,
        date,
        amount,
        title,
        description,
        cattegory
      });

      await incomeTransaction.save();
      res.send(incomeTransaction);
    } catch (e) {
      res.status(400).send({ error: e });
    }
  });

  // get all incomes
  app.get('/api/getAllIncome', requireLogin, async (req, res) => {
    try {
      const incomes = await IncomeTransaction.find({ _user: req.user.id });
      res.send(incomes);
    } catch (e) {
      res.status(400).send({ error: e });
    }
  });

  // get single income
  app.get('/api/getIncome/:id', requireLogin, async (req, res) => {
    try {
      const { id } = req.params;
      const income = await IncomeTransaction.find({ _user: req.user.id, _id: id })
      res.send(income);
    } catch (e) {
      res.status(400).send({ error: e });
    }
  });

  // delete single income
  app.delete('/api/deleteIncome/:id', requireLogin, async (req, res) => {
    try {
      const { id } = req.params;
      const income = await IncomeTransaction.findOneAndDelete({ _user: req.user.id, _id: id });
      res.send(income);
    } catch (e) {
      res.status(400).send({ error: e });
    }
  });

  app.put('/api/updateIncome/:id', requireLogin, async (req, res) => {
    try {
      const { id } = req.params;
      const income = await IncomeTransaction.findOneAndUpdate({_id: id}, req.body);

      await income.save();
      res.send(income);
    } catch (e) {
      res.status(400).send({error: e});
    }
  });
};