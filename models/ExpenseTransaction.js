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
    minlength: 1,
    maxlength: 8,
    trim: true,
    required: true
  },
  title: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: true
  },
  description: {
    type: String,
    maxlength: 255
  },
  cattegory: {
    type: String,
  }
});

mongoose.model('ExpenseTransaction', expenseTransactionSchema);