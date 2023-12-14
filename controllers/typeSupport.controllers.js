const db = require("../models");
const TypeSupport = db.db.typeSupports;
// const Op = db.db.Sequelize.Op;

// Create and Save a new typeSupport
exports.create = (req, res) => {
  // Validate request
  if (!req.body.libelle && !req.body.natureSupportId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a typeSupport
  const typeSupport = {
    libelle: req.body.libelle,
    description: req.body.description,
    natureSupportId: req.body.natureSupportId
  };

  // Save typeSupport in the database
  TypeSupport.create(typeSupport)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the TypeSupport."
      });
    });
};

// Retrieve all typeSupports from the database.
exports.findAll = (req, res) => {
  TypeSupport.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving typeSupports."
      });
    });
};

// Find a single typeSupport with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  TypeSupport.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find typeSupport with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving typeSupport with id=" + id
      });
    });
};

// Update a typeSupport by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  TypeSupport.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "typeSupport was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update typeSupport with id=${id}. Maybe typeSupport was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating typeSupport with id=" + id
      });
    });
};

// Delete a typeSupport with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  TypeSupport.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "typeSupport was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete typeSupport with id=${id}. Maybe typeSupport was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete typeSupport with id=" + id
      });
    });
};
