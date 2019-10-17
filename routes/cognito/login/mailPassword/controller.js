/**
 * routes/cognito/login/mailPassword/controller.js
 *
 * @description: Controlador das rotas de login "email e senha" /
 * This file contain all the logic and interaction for login "mail and password".
 *
 */

const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const { userPool } = require("../../../../config/AmazonCognitoIdentity");
global.fetch = require("node-fetch");

// @route    GET /cognito/login * RENDERIZAR ARQUIVO EJS
// @desc     Define a View para a rota de cadastro
exports.definirView = async (req, res) => {
  res.render("login");
};

// @route    POST /cognito/login
// @desc     Conexão com AWS e autenticação de usário
exports.realizarLogin = async (req, res) => {
  const { email, password } = req.body;

  var authenticationData = {
    Username: email,
    Password: password
  };
  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
    authenticationData
  );

  var userData = {
    Username: email,
    Pool: userPool
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function(result) {
      var accessToken = result.getAccessToken().getJwtToken();

      /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer*/
      var idToken = result.idToken.jwtToken;

      res.json({
        idToken
      });
    },

    onFailure: function(err) {
      console.log(err);
    }
  });
};
