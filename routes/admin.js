const path = require('path')
const express = require('express')
const rootdir = require('../utilities/rootdir')

const router = express.Router()


router.get('/add-product', (req, res) => {
  res.sendFile(path.join(rootdir, 'views', 'add-product.html'))
})

router.post('/add-product', (req, res) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router