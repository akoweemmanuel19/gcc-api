const db = require("../models");
const TypePartieSupport = db.db.typePartieSupports;
// const Op = db.db.Sequelize.Op;

// Create and Save a new typePartieSupport
exports.create = (req, res) => {
  // Validate request
  if (!req.body.libelle) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a typePartieSupport
  const typePartieConnaissance = {
    libelle: req.body.libelle,
    description: req.body.description
  };

  // Save typePartieSupport in the database
  TypePartieSupport.create(typePartieConnaissance)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the TypePartieSupport."
      });
    });
};

// Retrieve all typePartieSupports from the database.
exports.findAll = (req, res) => {
  TypePartieSupport.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving typePartieConnaissances."
      });
    });
};

// Find a single typePartieSupport with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  TypePartieSupport.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find typePartieSupport with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving typePartieSupport with id=" + id
      });
    });
};

// Update a typePartieSupport by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  TypePartieSupport.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "typePartieSupport was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update typePartieSupport with id=${id}. Maybe typePartieSupport was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating typePartieSupport with id=" + id
      });
    });
};

// Delete a typePartieSupport with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  TypePartieSupport.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "typePartieSupport was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete typePartieSupport with id=${id}. Maybe typePartieSupport was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete typePartieSupport with id=" + id
      });
    });
};
