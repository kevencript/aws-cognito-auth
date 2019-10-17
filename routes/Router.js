/**
 * routes/Router.js
 *
 * @description: Este é o roteador principal. Ele derá acesso aos módulos da aplicação, que
 * consequentemente, também terão seus roteadores. / This is the main router. This router give access to
 * the application modules, in wich will have their own routers.
 *
 */

const express = require("express");
const router = express.Router();

// carregando a View principal (index)
router.get("/", (req, res) => {
  res.render("index");
});

// import dos módulos
const cognitoRouter = require("./cognito/cognitoRouter");

// roteadores dos módulos
router.use("/cognito", cognitoRouter);

module.exports = router;
