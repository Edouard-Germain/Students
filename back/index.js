const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
const port = 5000


let students = [
    {
    name : 'Jean-Michel',
    id : 1},
     {
         name: 'Jean-Kevin',
         id: 2
     },
     {
         name : 'Jean-mouloud',
         id : 3 
     }
]

app.get('/students',(req, res)=> {
    res.json(students)
})

app.post('/students',(req,res)=>{
    res.json(students)
})

app.listen(port,()=>{
    console.log(`app running on ${port}`)
})