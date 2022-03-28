const express=require('express');
const sensorRoutes = require('./src/sensor/routes');
const app=express();


const port= process.env.port || 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hello!!");
});


app.use("/api/v1/sensor",sensorRoutes);

app.listen(port,"192.168.1.25" ,() => {console.log(`listining to post ${port}`)});