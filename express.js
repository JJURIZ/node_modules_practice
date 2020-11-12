const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! This is the most basic Express app you can create. I will do more with it later.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})