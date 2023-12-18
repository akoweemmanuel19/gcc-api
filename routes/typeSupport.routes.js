module.exports = app => {
  const typeSupports = require("../controllers/typeSupport.controllers");
  const auth = require('../config/auth')


  var router = require("express").Router();

  // Create a new Data
  router.post("/",auth, typeSupports.create);

  // Retrieve all Datas
  router.get("/",auth, typeSupports.findAll);

  // Retrieve a single Data with id
  router.get("/:id",auth, typeSupports.findOne);

  // Update a Data with id
  router.put("/:id",auth, typeSupports.update);

  // Delete a Data with id
  router.delete("/:id",auth, typeSupports.delete);

  app.use("/api/typeSupports", router);
};