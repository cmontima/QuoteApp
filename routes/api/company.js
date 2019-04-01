const router = require("express").Router();
const companyController = require("../../controllers/companyController");

// Matches with "/api/supplier"
router
  .route("/")
  .get(companyController.findAll)
  .post(companyController.create);

// Matches with "/api/supplier/:id"
router
  .route("/:id")
  .get(companyController.findById)
  .put(companyController.update)
  .delete(companyController.remove);

router
  .route("/:id/products")
  .get(companyController.getCompanyProducts)
  
module.exports = router;
