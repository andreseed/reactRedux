import express from "express";
import Validator from "Validator";
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInput(data) {
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
  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = "Confirmação de senha não confere";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}
//Definição da requisição POST
router.post("/", (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }
});

export default router;
