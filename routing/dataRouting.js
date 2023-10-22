const { dataController, bollywoodController, hollywoodController, technologyController, sportsController, foodController } = require("../controller/dataController");

const dataRouter = require("express").Router();

dataRouter.get("/bollywood",bollywoodController)
dataRouter.get("/hollywood",hollywoodController)
dataRouter.get("/technology",technologyController)
dataRouter.get("/sports",sportsController)
dataRouter.get("/food",foodController)
dataRouter.get("/data",dataController)




module.exports=dataRouter