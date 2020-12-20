const router = require('express').Router()
const someDataController = require('../../controllers/someDataController')

// Matches with "/api/somedata"
router.route('/')
  .get(someDataController.findAll)
  .post(someDataController.create)

// Matches with "/api/somedata/:id"
router
  .route('/:id')
  .get(someDataController.findById)
  .put(someDataController.update)
  .delete(someDataController.remove)

module.exports = router
