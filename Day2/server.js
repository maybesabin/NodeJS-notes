const express = require('express')
const app = express()

app.get('/', function (req, res) {
  var foodItems = {
    name: "momo",
    plate: 2,
    price: 100
  }

  res.send(foodItems)
})


app.listen(3000, ()=>{
    console.log("Server is running")
})