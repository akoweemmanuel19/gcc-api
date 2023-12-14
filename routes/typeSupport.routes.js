module.exports = app => {
  const typeSupports = require("../controllers/typeSupport.controllers");

  var router = require("express").Router();

  // Create a new Data
  router.post("/", typeSupports.create);

  // Retrieve all Datas
  router.get("/", typeSupports.findAll);

  // Retrieve a single Data with id
  router.get("/:id", typeSupports.findOne);

  // Update a Data with id
  router.put("/:id", typeSupports.update);

  // Delete a Data with id
  router.delete("/:id", typeSupports.delete);

  app.use("/api/typeSupports", router);
};