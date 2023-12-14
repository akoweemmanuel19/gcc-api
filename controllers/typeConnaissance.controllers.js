const db = require("../models");
const typeConnaissance = db.typeConnaissance;
// const Op = db.Sequelize.Op;

// Create and Save a new typeConnaissance
exports.create = (req, res) => {
  // Validate request
  if (!req.body.libelle) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a typeConnaissance
  const typeConnaissance = {
    libelle: req.body.libelle,
    description: req.body.description
  };

  // Save typeConnaissance in the database
  typeConnaissance.create(typeConnaissance)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the typeConnaissance."
      });
    });
};

// Retrieve all typeConnaissances from the database.
exports.findAll = (req, res) => {
  typeConnaissance.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving typeConnaissances."
      });
    });
};

// Find a single typeConnaissance with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  typeConnaissance.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find typeConnaissance with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving typeConnaissance with id=" + id
      });
    });
};

// Update a typeConnaissance by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  typeConnaissance.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "typeConnaissance was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update typeConnaissance with id=${id}. Maybe typeConnaissance was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating typeConnaissance with id=" + id
      });
    });
};

// Delete a typeConnaissance with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  typeConnaissance.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "typeConnaissance was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete typeConnaissance with id=${id}. Maybe typeConnaissance was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete typeConnaissance with id=" + id
      });
    });
};
