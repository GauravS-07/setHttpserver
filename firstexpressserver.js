const express = require('express')
//create express app object by calling express function
const app = express()
const port = 3000

app.get('/', function(req, res){
  res.send('Hello World!');
})

app.post('/home', (req, res) => {
    res.send('This is patch request !');
});

app.patch('/home',function(req,res){
    res.json({
        message:"This is json file",
        success:true
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})