const db = require("../models");
const Referencer = db.referencers;
const Op = db.Sequelize.Op;

// Create and Save a new Referencer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Referencer
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Referencer in the database
  Referencer.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Referencer."
      });
    });
};

// Retrieve all Referencers from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Referencer.findAll({ where: condition })
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

// Find a single Referencer with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Referencer.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Referencer with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Referencer with id=" + id
      });
    });
};

// Update a Referencer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Referencer.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Referencer was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Referencer with id=${id}. Maybe Referencer was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Referencer with id=" + id
      });
    });
};

// Delete a Referencer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Referencer.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Referencer was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Referencer with id=${id}. Maybe Referencer was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Referencer with id=" + id
      });
    });
};
