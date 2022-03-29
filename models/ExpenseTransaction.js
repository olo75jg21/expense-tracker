const mongoose = require('mongoose');
const { Schema } = mongoose;

const expenseTransactionSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  date: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  cattegory: {
    type: String,
  }
});

mongoose.model('ExpenseTransaction', expenseTransactionSchema);