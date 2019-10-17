/**
 * routes/cognito/signup/mailPassword/controller.js
 *
 * @description: Controlador das rotas de autenticação "email e senha" /
 * This file contain all the logic and interaction for auth "mail and password".
 *
 */
global.fetch = require("node-fetch");
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");

// retornando as chaves do arquivo de configuração
const { UserPoolId, ClientId } = require("../../../../config/dev");

const poolData = {
  UserPoolId,
  ClientId
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

// @route    GET /cognito/signup * RENDERIZAR ARQUIVO EJS
// @desc     Define a View para a rota de cadastro
exports.definirView = async (req, res) => {
  res.render("signup");
};

// @route    POST /cognito/signup
// @desc     Conexão com AWS e criação de um novo usário
exports.realizarCadastro = async (req, res) => {
  const { email, password, confirm_password } = req.body;

  var attributeList = [];

  var dataEmail = {
    Name: "email",
    Value: email
  };

  var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataEmail
  );

  attributeList.push(attributeEmail);

  userPool.signUp(email, password, attributeList, null, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    cognitoUser = result.user;
    console.log(result);
    console.log(result.user);
    console.log("user name is " + cognitoUser.getUsername());
  });
};
