const { dataController } = require("../controller/dataController");

const dataRouter = require("express").Router();

dataRouter.get("/data",dataController)




module.exports=dataRouter