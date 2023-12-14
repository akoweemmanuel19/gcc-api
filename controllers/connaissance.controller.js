const db = require("../models");
const Connaissance = db.db.connaissances;
// const Op = db.db.Sequelize.Op;

// Create and Save a new Connaissance
exports.create = (req, res) => {
  // Validate request
  if (!req.body.libelle && !req.body.typeConnaissanceId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Connaissance
  const connaissance = req.body.connaissanceSId ? {
    libelle: req.body.libelle,
    typeConnaissanceId: req.body.typeConnaissanceId,
    connaissanceSId: req.body.connaissanceSId,
    description: req.body.description
  } : {
    libelle: req.body.libelle,
    typeConnaissanceId: req.body.typeConnaissanceId,
    description: req.body.description
  };

  // Save Connaissance in the database
  Connaissance.create(connaissance)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Connaissance."
      });
    });
};

// Retrieve all Connaissances from the database.
exports.findAll = (req, res) => {
  const typeConnaissanceId = req.query.typeConnaissanceId;

  if (req.query.typeConnaissanceId) {
    Connaissance.findAll({
      where: {
        typeConnaissanceId: typeConnaissanceId
      }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving connaissances."
        });
      });
  } else {
    Connaissance.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving connaissances."
        });
      });
  }
};

// Find a single Connaissance with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Connaissance.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Connaissance with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Connaissance with id=" + id
      });
    });
};

// Update a Connaissance by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Connaissance.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Connaissance was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Connaissance with id=${id}. Maybe Connaissance was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Connaissance with id=" + id
      });
    });
};

// Delete a Connaissance with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Connaissance.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Connaissance was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Connaissance with id=${id}. Maybe Connaissance was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Connaissance with id=" + id
      });
    });
};
