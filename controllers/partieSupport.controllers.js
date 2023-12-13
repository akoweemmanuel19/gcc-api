const db = require("../models");
const PartieSupport = db.partieSupports;
const Op = db.Sequelize.Op;

// Create and Save a new PartieSupport
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a PartieSupport
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save PartieSupport in the database
  PartieSupport.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the PartieSupport."
      });
    });
};

// Retrieve all PartieSupports from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  PartieSupport.findAll({ where: condition })
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

// Find a single PartieSupport with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  PartieSupport.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find PartieSupport with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving PartieSupport with id=" + id
      });
    });
};

// Update a PartieSupport by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  PartieSupport.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "PartieSupport was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update PartieSupport with id=${id}. Maybe PartieSupport was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating PartieSupport with id=" + id
      });
    });
};

// Delete a PartieSupport with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  PartieSupport.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "PartieSupport was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete PartieSupport with id=${id}. Maybe PartieSupport was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete PartieSupport with id=" + id
      });
    });
};