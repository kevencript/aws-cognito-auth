/**
 *
 * config/AmazonCognitoIdentity.js
 *
 * @description: Aqui estão todas as chaves do sistema / Keys of the system
 *
 */

const AmazonCognitoIdentity = require("amazon-cognito-identity-js");

// retornando as chaves do arquivo de configuração
const { UserPoolId, ClientId } = require("./dev");

const poolData = {
  UserPoolId,
  ClientId
};

// Exportando o objeto UserPool
exports.userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
