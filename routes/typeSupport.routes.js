module.exports = app => {
  const typeSupports = require("../controllers/typeSupport.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", typeSupports.create);

  // Retrieve all Tutorials
  router.get("/", typeSupports.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", typeSupports.findOne);

  // Update a Tutorial with id
  router.put("/:id", typeSupports.update);

  // Delete a Tutorial with id
  router.delete("/:id", typeSupports.delete);

  app.use("/api/typeSupports", router);
};