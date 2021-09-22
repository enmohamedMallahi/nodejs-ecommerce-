const path = require('path')
const fs = require('fs')
const express = require('express')
const Product = require('../models/product')

const router = express.Router()

router.get('/', (req, res) => {
  Product.getAll((products) => {
    res.render(path.join('pages', 'shop', 'index.ejs'), {
      products,
      pageTitle: 'Shop',
      path: '/',
    })
  })
})

router.get('/product', (req, res) => {
  Product.getAll((products) => {
    res.render(path.join('pages', 'shop', 'product-details.ejs'), {
      products,
      pageTitle: 'Shop',
      path: '/',
    })
  })
})


router.get('/products', (req, res) => {
  Product.getAll((products) => {
    res.render(path.join('pages', 'shop', 'products-list.ejs'), {
      products,
      pageTitle: 'Shop',
      path: '/',
    })
  })
})

router.get('/cart', (req, res) => {
  res.render(path.join('pages', 'shop', 'cart.ejs'), {
    pageTitle: 'Cart',
    path: '/cart',
  })
})

// router.get('/:id', (req, res) => {
//   const productId = req.params.id
//   const products = JSON.parse(fs.readFileSync(path.join(rootdir, 'data', 'products.json')))
//   const product = products.filter(product => product.id === productId)[0]
//   res.send(`<h1>${product.name}</h1>`)
// })

module.exports = router