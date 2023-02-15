const express = require("express")
const mongoose = require("mongoose")
const authRouter = require("./router/authRouter")

app = express()
app.use(express.json())

app.use('auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect('{YOUR_URL}')
        app.listen(3000, () => {
            console.log("server running...")
        })
    } catch (error) {
        console.log(error);
    }
}

start()