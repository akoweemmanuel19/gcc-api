module.exports = app => {
  const typePartieSupports = require("../controllers/typePartieSupport.controllers");
  const auth = require('../config/auth')


  var router = require("express").Router();

  // Create a new Data
  router.post("/",auth, typePartieSupports.create);

  // Retrieve all Datas
  router.get("/",auth, typePartieSupports.findAll);

  // Retrieve a single Data with id
  router.get("/:id",auth, typePartieSupports.findOne);

  // Update a Data with id
  router.put("/:id",auth, typePartieSupports.update);

  // Delete a Data with id
  router.delete("/:id",auth, typePartieSupports.delete);

  app.use("/api/typePartieSupports", router);
};