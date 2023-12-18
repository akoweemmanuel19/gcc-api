module.exports = app => {
    const partieSupports = require("../controllers/partieSupport.controllers");
    const auth = require('../config/auth')

  
    var router = require("express").Router();
  
    // Create a new Data
    router.post("/", auth,partieSupports.create);
  
    // Retrieve all Datas
    router.get("/",auth, partieSupports.findAll);
  
    // Retrieve a single Data with id
    router.get("/:id",auth, partieSupports.findOne);
  
    // Update a Data with id
    router.put("/:id",auth, partieSupports.update);
  
    // Delete a Data with id
    router.delete("/:id",auth, partieSupports.delete);
  
    app.use("/api/partieSupports", router);
  };