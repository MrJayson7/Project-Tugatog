const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 7000
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
    cors({
        origin: "*",
    })
);

// DATABASE CONFIGURATION //
mongoose.connect("mongodb+srv://Jayson:MyProjects123@mycluster.9ulkp4h.mongodb.net/ProjectTugatogdb",
    (err) => {
        if(err) throw err;
        console.log("Project Tugatog is succesfully connected!");

        app.listen(port, () => {
            console.log(`Project Tugatog server is active at localhost ${port}.`)
        });
    }
);
//// DATABASE CONFIG END ////

app.get('/', (req, res) => {
    res.send('Welcome to the Project Tugatog express server!')
});

/////      ROUTES CONFIG      /////


///// ROUTES CONFIG END /////