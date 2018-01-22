import express from "express";
import validateInput from '../shared/validations/signup';

let router = express.Router();

//Definição da requisição POST
router.post("/", (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if (isValid) {
    res.json({success: true});
  } else {
    res.status(400).json(errors);
  }
});

export default router;
