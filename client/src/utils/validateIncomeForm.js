const validate = ({ title, amount, description }) => {
  const errors = {};
  if (!title) {
    title = "Title is required";
  }

  if (!amount) {
    errors.amount = "Amount is required";
  } else if (isNaN(amount)) {
    errors.amount = "Amount has to be a number";
  }

  if (description) {
    if (description.length < 5) {
      errors.description = "Description must be at least 5 letters long";
    }
  }

  return errors;
};

export default validate;