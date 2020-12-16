const db = require('../models');
const Users = db.users ;
const Op = db.Sequelize.Op






exports.create = (req, res) =>{ // Validate request
 
console.log(req.body)
  // Create a User
  const user = {
   
 name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  // Save Tutorial in the database
  Users.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User .",
      });
    });
};

exports.findAll = (req, res) => {};

exports.findOne = (req, res) => {};







