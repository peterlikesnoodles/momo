const express = require('express')
const cors = require('cors')
const formidable = require('formidable')

const Port = 8086

const app = express()
app.use(cors())

app.post('/upload', (req, res, next) => {
  const form = formidable({multiples: true})
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err)
      return
    }

    res.writeHead(200, {'content-type': 'application/json'})
    res.end(JSON.stringify({fields, files}, null, 2))
  })
})

app.listen(Port, () => {
  console.log(`Server started at ${Port}... Happy Coding!`)
})
