const db = require('../models')

const show = (req, res) => {
    db.user.findAll().then(allUsers => res.json({ allUsers }))
}

module.exports = {
    show
  }