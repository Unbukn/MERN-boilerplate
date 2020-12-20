const router = require('express').Router()
const someDataRoutes = require('./somedata')

// Data routes
router.use('/somedata', someDataRoutes)

module.exports = router
