const express = require('express')
const router = express.Router()

const extracontroller = require('../controllers/extra')

router.get('/extras', extracontroller.index)

router.get('/extra/:id', extracontroller.show)
  
  router.post('/extra', extracontroller.store)
  
  router.put('/extra/:id', extracontroller.update)
  
  router.delete('/extra/:id', extracontroller.delete)

  module.exports = router