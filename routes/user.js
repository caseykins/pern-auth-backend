const router = require('express').Router()
const passport = require('../passport')
const ctrl = require('../controllers')

// PATH = /api/v1/auth
// router.delete('/logout', ctrl.auth.logout)
router.get('/', ctrl.user.show)

module.exports = router
