/**
 * routes/cognito/signup/signUpRouter.js
 *
 * @description: Esse é o roteador do módulo "SignUp". Ele dará acesso aos meios de cadastro
 * (Google, Facebook ou e-mail e senha) / This is the "SignUp" module router. This router give access to
 * ways of signup (Facebook, Google, mail passsword)
 *
 */

const express = require("express");
const router = express.Router();

// import
const mailPassword = require("./mailPassword");

// roteadores
router.use("/", mailPassword);

module.exports = router;
