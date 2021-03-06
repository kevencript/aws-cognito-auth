/**
 * routes/cognito/signup/signUpRouter.js
 *
 * @description: Esse é o roteador do módulo "Login". Ele dará acesso aos meios de login
 * (Google, Facebook ou e-mail e senha) / This is the "Login" module router. This router give access to
 * ways of login (Facebook, Google, mail passsword)
 *
 */

const express = require("express");
const router = express.Router();

// import
const mailPassword = require("./mailPassword");

// roteadores
router.use("/", mailPassword);

module.exports = router;
