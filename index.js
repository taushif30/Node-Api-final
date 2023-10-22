const express = require("express");
const dataRouter = require("./routing/dataRouting");
const app = express();

app.use(dataRouter)
app.get("/",(req,res)=>{
    res.send("Server : Home Page")
})

app.listen(4000,()=>{
    try{
        console.log("Server running fine in : 4000")
    }
    catch(err){
        console.log(`Error occured fetching server ${err}`)
    }
})