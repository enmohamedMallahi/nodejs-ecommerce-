const path = require('path')
const express = require('express')
const rootdir = require('../utilities/rootdir')

const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile(path.join(rootdir, 'views', 'shop.html'))
})

module.exports = router