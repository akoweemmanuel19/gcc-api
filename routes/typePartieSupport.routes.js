module.exports = app => {
  const typePartieSupports = require("../controllers/typePartieSupport.controllers");

  var router = require("express").Router();

  // Create a new Data
  router.post("/", typePartieSupports.create);

  // Retrieve all Datas
  router.get("/", typePartieSupports.findAll);

  // Retrieve a single Data with id
  router.get("/:id", typePartieSupports.findOne);

  // Update a Data with id
  router.put("/:id", typePartieSupports.update);

  // Delete a Data with id
  router.delete("/:id", typePartieSupports.delete);

  app.use("/api/typePartieSupports", router);
};