const { bollywood, hollywood, technology, sports, food, dumyData } = require("../dumyData")

const bollywoodController = (req,res)=>{
    return res.send(bollywood)
}
const hollywoodController = (req,res)=>{
    return res.send(hollywood)
}
const technologyController = (req,res)=>{
    return res.send(technology)
}
const sportsController = (req,res)=>{
    return res.send(sports)
}
const foodController = (req,res)=>{
    return res.send(food)
}

const dataController = (req,res)=>{
    // const id = req.params.id
    // const data = dummyData.find(item=>item.id==id)
    return res.send(dumyData)
}

module.exports={dataController,bollywoodController,hollywoodController,technologyController,sportsController,foodController}