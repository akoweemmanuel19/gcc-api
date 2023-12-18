const db = require("../models");
const Utilisateur = db.db.Utilisateurs;
// const Op = db.db.Sequelize.Op;

// Create and Save a new Utilisateur
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom && !req.body.prenom && !req.body.email && !req.body.password && !req.body.username ) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Utilisateur
  const utilisateur = {
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  }

  // Save Utilisateur in the database
  Utilisateur.create(utilisateur)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Utilisateur."
      });
    });
};

// Retrieve all Utilisateurs from the database.
exports.findAll = (req, res) => {
  Utilisateur.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Utilisateurs."
    });
  });
};

// Find a single Utilisateur with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Utilisateur.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Utilisateur with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Utilisateur with id=" + id
      });
    });
};

// Update a Utilisateur by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Utilisateur.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Utilisateur was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Utilisateur with id=${id}. Maybe Utilisateur was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Utilisateur with id=" + id
      });
    });
};

// Delete a Utilisateur with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Utilisateur.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Utilisateur was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Utilisateur with id=${id}. Maybe Utilisateur was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Utilisateur with id=" + id
      });
    });
};
