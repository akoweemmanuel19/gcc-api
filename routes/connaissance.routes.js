module.exports = app => {
  const connaissances = require("../controllers/connaissance.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", connaissances.create);

  // Retrieve all Tutorials
  router.get("/", connaissances.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", connaissances.findOne);

  // Update a Tutorial with id
  router.put("/:id", connaissances.update);

  // Delete a Tutorial with id
  router.delete("/:id", connaissances.delete);

  app.use("/api/connaissances", router);
};