const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(require.main.filename), 'data', 'products.json')


const getProductsFromFile = () => {
  const readFilePromise = new Promise((resolve, reject) => {
    fs.readFile(p, (err, rawData) => {
      if (err) {
        reject(err)
      } else {
        resolve(JSON.parse(rawData))
      }
    })
  })
  return readFilePromise
}

module.exports = class Product {
  constructor(name, description, image) {
    this.name = name
    this.description = description
    this.image = image
  }

  save() {
    getProductsFromFile()
    .then(products => {
      products.push(this)
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err)
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  static async getAll(callback) {
    try {
      const products = await getProductsFromFile()
      callback(products)
      
    } catch (err) {
      console.log(err)
    }

  }
}
