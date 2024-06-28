const express = require('express')
const app = express()
app.use(express.json())

//creating an user

const user = [{
    name: "john",
    kidneys: [{
        healthy: true
    }]
}]

//get is to retreive values
app.get('/', function(req,res){
    const johnKidneys = user[0].kidneys
    const totalKidneys = johnKidneys.length;
    let healthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            healthyKidneys += 1
        }
    }
    const unhealthyKidneys = totalKidneys - healthyKidneys

    res.json({
        totalKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})

//post is to add data
app.post('/', function(req,res){
    const isHealthy = req.body.isHealthy; //passing ishealthy to the body of post
    user[0].kidneys.push({
        healthy: isHealthy
    })

    res.send({
        msg: "DONE"
    })
})

//put is to replace/update data
app.put('/', function(req,res){
    //making every kidney healthy

    for(let i=0; i<user[0].kidneys.length; i++){
        user[0].kidneys[i].healthy = true
    }

    res.json({})
})

//removes data
app.delete('/', function(req,res){
    const newKidneys = [] //creating a new array for healthy kidneys
    for(let i=1; i<user[0].kidneys.length; i++){
        if(user[0].kidneys[i].healthy){
            newKidneys.push(user[0].kidneys[i])
        }
    }

    user[0].kidneys = newKidneys
    res.json({})
})

app.listen(3000, ()=>{
    console.log('server is running')
})