const path = require('path')
const fs = require('fs')
const express = require('express')
const rootdir = require('../utilities/rootdir')

const router = express.Router()

router.get('/', (req, res) => {
  res.render(path.join('pages', 'shop.ejs'), {
    products: JSON.parse(fs.readFileSync(path.join(rootdir, 'data', 'products.json')))
  })
})

router.get('/:id', (req, res) => {
  const productId = req.params.id
  const products = JSON.parse(fs.readFileSync(path.join(rootdir, 'data', 'products.json')))
  const product = products.filter(product => product.id === productId)[0]
  res.send(`<h1>${product.name}</h1>`)
})

module.exports = router