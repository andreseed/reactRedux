import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (isEmpty(data.username)) {
    errors.username = "Campo obrigatório";
  }
  if (isEmpty(data.email)) {
    errors.email = "Campo obrigatório";
  } else {
    if (!Validator.isEmail(data.email)) {
      errors.email = "Email inválido";
    }
  }
  if (isEmpty(data.password)) {
    errors.password = "Campo obrigatório";
  }
  if (isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = "Campo obrigatório";
  }
  else {
    if (!Validator.equals(data.password, data.passwordConfirmation)) {
      errors.passwordConfirmation = "Senha não confere";
    }
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}
