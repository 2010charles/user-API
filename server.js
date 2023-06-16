import express from "express";
import config from "./src/db/config.js";
import userRoutes from "./src/Routers/Routers.js"
import bodyParser from "body-parser";

const app = express();

//middlewares 
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
userRoutes(app);


app.get('/',(req,res)=>{
    res.send('Confirm if the server is Running');

})
app.listen(config.port,()=>{
    console.log(`The server is runing at ${config.url}`);
})