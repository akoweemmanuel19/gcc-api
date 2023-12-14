module.exports = app => {
  const supports = require("../controllers/support.controllers");

  var router = require("express").Router();

  // Create a new Data
  router.post("/", supports.create);

  // Retrieve all Datas
  router.get("/", supports.findAll);

  // Retrieve a single Data with id
  router.get("/:id", supports.findOne);

  // Update a Data with id
  router.put("/:id", supports.update);

  // Delete a Data with id
  router.delete("/:id", supports.delete);

  app.use("/api/supports", router);
};