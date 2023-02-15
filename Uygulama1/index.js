const express = require("express");
const mongoose = require("mongoose");
const filmRouter = require("./routes/filmRouter");

app = express();
app.use(express.json());

app.use('/api', filmRouter);

const start = async () => {
    try {
        await mongoose.connect('{YOUR_URL}', { useNewUrlParser: true, useUnifiedTopology: true });
        app.listen(3000, () => {
            console.log("server running...");
        });
    } catch (error) {
        console.log(error);
    }
}

start()