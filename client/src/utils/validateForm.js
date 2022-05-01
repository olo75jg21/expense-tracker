const validate = ({ title, amount, description }) => {
  const errors = {};

  if (!title) {
    errors.title = "Title is required";
  } else if (title.length < 4) {
    errors.title = "Title must be at least 4 characters long"
  } else if (title.length > 100) {
    errors.title = "Title can't be longer than 100 characters"
  }

  if (!amount) {
    errors.amount = "Amount is required";
  } else if (isNaN(amount)) {
    errors.amount = "Amount has to be a number";
  } else if (amount.length > 8) {
    errors.amount = "Too big amount"
  }

  if (description.length > 255) {
    errors.description = "Description can't be longer than 255 characters";
  }

  return errors;
};

export default validate;