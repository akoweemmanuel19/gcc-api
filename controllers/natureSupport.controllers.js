const db = require("../models");
const NatureSupport = db.natureSupports;
const Op = db.Sequelize.Op;

// Create and Save a new NatureSupport
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a NatureSupport
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save NatureSupport in the database
  NatureSupport.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the NatureSupport."
      });
    });
};

// Retrieve all NatureSupports from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  NatureSupport.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single NatureSupport with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  NatureSupport.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find NatureSupport with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving NatureSupport with id=" + id
      });
    });
};

// Update a NatureSupport by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  NatureSupport.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "NatureSupport was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update NatureSupport with id=${id}. Maybe NatureSupport was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating NatureSupport with id=" + id
      });
    });
};

// Delete a NatureSupport with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  NatureSupport.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "NatureSupport was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete NatureSupport with id=${id}. Maybe NatureSupport was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete NatureSupport with id=" + id
      });
    });
};