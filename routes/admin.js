const path = require('path')
const fs = require('fs')
const express = require('express')
const rootdir = require('../utilities/rootdir')

const router = express.Router()


router.get('/add-product', (req, res) => {
  res.render(path.join('pages', 'add-product.ejs'))
})

router.post('/add-product', (req, res) => {
  fs.readFile(path.join(rootdir, 'data', 'products.json'), (err, rawdata) => {
    if (err) console.log(err)
    const products = JSON.parse(rawdata)
    products.push({
      id: products.length + 1,
      ...req.body
    })
    fs.writeFileSync(path.join(rootdir, 'data', 'products.json'), JSON.stringify(products, null, 2))

  })
  console.log(req.body)
  res.redirect('/')
})

module.exports = router