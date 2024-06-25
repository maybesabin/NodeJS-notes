const express = require('express')
const app = express()
const db = require('./db.js')
const person = require('./models/person.js')

const bodyParser = require('body-parser') //middleware to extract data
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('New hotels')
})

app.post('/person', async (req, res) =>{
  try{
      const data = res.body //data contains data about the person
      res.send("Person")
      //creating a new document for the data
      const newPerson = new person(data);

      //saving data
      const response = await newPerson.save()
      console.log("data saved")
      res.status(200).json(response)
    }

  catch(err){
    console.log("error")
    res.status(500).json({error: "internal server error"})
  }
})

app.listen(3000, ()=>{
  console.log("Sever initiated")
})