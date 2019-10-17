/**
 * routes/cognito/cognitoRouter.js
 *
 * @description: Esse é o roteador do módulo "Cognito". Ele derá acesso aos módulos (separados por funcionalidade)
 * vinculados ao Cognito / This is the "Cognito" module router. This router give access to vinculated modules to Cognito.
 *
 */

const express = require("express");
const router = express.Router();

// import dos módulos
const signUpRoutes = require("./signup/signUpRouter");

// roteadores dos módulos
router.use("/signup", signUpRoutes);

module.exports = router;
