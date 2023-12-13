const db = require("../models");
const Support = db.supports;
const Op = db.Sequelize.Op;

// Create and Save a new Support
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Support
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Support in the database
  Support.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Support."
      });
    });
};

// Retrieve all Supports from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Support.findAll({ where: condition })
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

// Find a single Support with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Support.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Support with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Support with id=" + id
      });
    });
};

// Update a Support by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Support.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Support was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Support with id=${id}. Maybe Support was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Support with id=" + id
      });
    });
};

// Delete a Support with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Support.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Support was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Support with id=${id}. Maybe Support was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Support with id=" + id
      });
    });
};
