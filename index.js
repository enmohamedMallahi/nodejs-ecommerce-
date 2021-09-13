const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'shop.html'))
})

app.get('/add-product', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'add-product.html'))
})

app.post('/add-product', (req, res) => {
  console.log(req.body)
  res.redirect('/')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})