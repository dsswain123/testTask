
const express = require('express')
const dotenv = require("dotenv")

const {sequelize} = require('./models/task')
const taskRoutes = require('./routes/taskRoutes')

dotenv.config()

const app = express()
app.use(express.json())
app.use("/api/v1",taskRoutes)
app.get('/',(req,res) =>{
    res.send({message:`backend server is Up`,data:[]})
})
const PORT = process.env.PORT || 3000

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`)
})