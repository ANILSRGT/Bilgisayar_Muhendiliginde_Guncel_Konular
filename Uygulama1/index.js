const express = require("express");
const mongoose = require("mongoose");
const filmRouter = require("./routes/filmRouter");

app = express();
app.use(express.json());

app.use('/api',filmRouter);

const start = async () => {
    try {
        await  mongoose.connect('mongodb+srv://anilsrgt:1234567890@uygulama1cluster.ihjyo.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});
        app.listen(3000, () => {
            console.log("server running...");
        });
    } catch (error) {
        console.log(error);
    }
}

start()