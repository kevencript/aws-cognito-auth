/**
 * routes/cognito/signup/mailPassword/index.js
 *
 * @description: Esse arquivo contém as rotas de autenticação no formato
 * "Email e senha" / This file have all routes for auth using "e-mail and password".
 *
 */

const express = require("express");
const router = express.Router();

// controller import
const controller = require("./controller");

// @route    GET /cognito/signup * RENDERIZAR ARQUIVO EJS
// @desc     Define a View para a rota de cadastro
// @acess    Public
router.get("/", controller.definirView);

// @route    POST /cognito/signup
// @desc     Conexão com AWS e criação de um novo usário
// @acess    Public
router.post("/", controller.realizarCadastro);

module.exports = router;
