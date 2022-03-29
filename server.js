const express=require('express');
const path = require('path');
const sensorRoutes = require('./src/sensor/routes');
const app=express();
// html page call
console.log(path.join(__dirname, '/html'));
const StaticPath = path.join(__dirname, '/html');
app.use(express.static(StaticPath));

const port= process.env.port || 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hello!!");
});


app.use("/api/v1/sensor",sensorRoutes);

app.listen(port,"192.168.1.25" ,() => {console.log(`listining to post ${port}`)});