const express = require('express')
//create express app object by calling express function
const app = express()
const port = 3000

app.get('/', function(req, res){
  res.send('Hello World!')
})

app.get('\home', (req, res) => {
    res.send('This is patch request !')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})