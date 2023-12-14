module.exports = app => {
  const typeConnaissances = require("../controllers/typeConnaissance.controllers");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", typeConnaissances.create);

  // Retrieve all Tutorials
  router.get("/", typeConnaissances.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", typeConnaissances.findOne);

  // Update a Tutorial with id
  router.put("/:id", typeConnaissances.update);

  // Delete a Tutorial with id
  router.delete("/:id", typeConnaissances.delete);

  app.use("/api/typeConnaissances", router);
};