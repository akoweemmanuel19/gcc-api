module.exports = app => {
    const partieSupports = require("../controllers/partieSupport.controllers");
  
    var router = require("express").Router();
  
    // Create a new Data
    router.post("/", partieSupports.create);
  
    // Retrieve all Datas
    router.get("/", partieSupports.findAll);
  
    // Retrieve a single Data with id
    router.get("/:id", partieSupports.findOne);
  
    // Update a Data with id
    router.put("/:id", partieSupports.update);
  
    // Delete a Data with id
    router.delete("/:id", partieSupports.delete);
  
    app.use("/api/partieSupports", router);
  };