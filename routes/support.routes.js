module.exports = app => {
  const supports = require("../controllers/support.controllers");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", supports.create);

  // Retrieve all Tutorials
  router.get("/", supports.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", supports.findOne);

  // Update a Tutorial with id
  router.put("/:id", supports.update);

  // Delete a Tutorial with id
  router.delete("/:id", supports.delete);

  app.use("/api/supports", router);
};