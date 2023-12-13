module.exports = app => {
  const typePartieSupports = require("../controllers/typePartieSupport.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", typePartieSupports.create);

  // Retrieve all Tutorials
  router.get("/", typePartieSupports.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", typePartieSupports.findOne);

  // Update a Tutorial with id
  router.put("/:id", typePartieSupports.update);

  // Delete a Tutorial with id
  router.delete("/:id", typePartieSupports.delete);

  app.use("/api/typePartieSupports", router);
};