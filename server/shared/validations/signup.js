import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.username)) {
    errors.username = "Campo obrigatório";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Campo obrigatório";
  }
  if (Validator.isEmail(data.email)) {
    errors.email = "Campo obrigatório";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Campo obrigatório";
  }
  if (Validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = "Campo obrigatório";
  }
  else {
    if (!Validator.equals(data.password, data.passwordConfirmation)) {
      errors.passwordConfirmation = "Confirmação de senha não confere";
    }
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}
