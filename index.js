const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');

require('./models/User');
require('./models/IncomeTransaction');
require('./models/ExpenseTransaction');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  keys: [keys.cookieKey],
  maxAge: 2 * 24 * 60 * 60 * 1000 // 48h
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/incomeTransactionRoutes')(app);
require('./routes/expenseTransactionRoutes')(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});