module.exports = app => {
  const natureSupports = require("../controllers/natureSupport.controllers");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", natureSupports.create);

  // Retrieve all Tutorials
  router.get("/", natureSupports.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", natureSupports.findOne);

  // Update a Tutorial with id
  router.put("/:id", natureSupports.update);

  // Delete a Tutorial with id
  router.delete("/:id", natureSupports.delete);

  app.use("/api/natureSupports", router);
};