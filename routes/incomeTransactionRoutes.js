const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const IncomeTransaction = mongoose.model('IncomeTransaction');

module.exports = (app) => {
  app.post('/api/createIncome', requireLogin, async (req, res) => {
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
  });
};