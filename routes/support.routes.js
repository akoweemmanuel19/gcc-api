module.exports = app => {
  const supports = require("../controllers/support.controllers");
  const auth = require('../config/auth')

  
  var router = require("express").Router();

  // Create a new Data
  router.post("/",auth, supports.create);

  // Retrieve all Datas
  router.get("/",auth, supports.findAll);

  // Retrieve a single Data with id
  router.get("/:id",auth, supports.findOne);

  // Update a Data with id
  router.put("/:id",auth, supports.update);

  // Delete a Data with id
  router.delete("/:id",auth, supports.delete);

  app.use("/api/supports", router);
};