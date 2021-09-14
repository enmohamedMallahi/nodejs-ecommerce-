const express = require('express')
const path = require('path')

const app = express()

const shopRouter = require('./routes/shop')
const adminRouter = require('./routes/admin')

// Parsing the incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(shopRouter)
app.use('/admin', adminRouter)

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`))