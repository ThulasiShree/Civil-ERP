const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/civil-erp")

app.listen(4000, () => {
    console.log("Server is Running...")
})