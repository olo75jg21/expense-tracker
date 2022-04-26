const validate = ({ title, amount, cattegory }) => {
  const errors = {};

  if (!title) {
    errors.title = "Title is required";
  } else if (title.length < 4) {
    errors.title = "Title must be at least 4 characters long"
  }

  if (!amount) {
    errors.amount = "Amount is required";
  } else if (isNaN(amount)) {
    errors.amount = "Amount has to be a number";
  }

  return errors;
};

export default validate;