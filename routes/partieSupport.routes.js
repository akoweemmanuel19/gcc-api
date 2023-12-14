module.exports = app => {
    const partieSupports = require("../controllers/partieSupport.controllers");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", partieSupports.create);
  
    // Retrieve all Tutorials
    router.get("/", partieSupports.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", partieSupports.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", partieSupports.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", partieSupports.delete);
  
    app.use("/api/partieSupports", router);
  };