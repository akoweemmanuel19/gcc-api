const db = require("../models");
const typeSupport = db.typeSupports;
const Op = db.Sequelize.Op;

// Create and Save a new typeSupport
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a typeSupport
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save typeSupport in the database
  typeSupport.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the typeSupport."
      });
    });
};

// Retrieve all typeSupports from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  typeSupport.findAll({ where: condition })
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

// Find a single typeSupport with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  typeSupport.findByPk(id)
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

  typeSupport.update(req.body, {
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

  typeSupport.destroy({
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
