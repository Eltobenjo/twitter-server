module.exports = (app) => {
  const users = require("../controllers/users_controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", users.create);

  app.use("/users", router);
};

