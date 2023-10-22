const { dummyData } = require("../data/dummyData")

const dataController = (req,res)=>{
    // const id = req.params.id
    // const data = dummyData.find(item=>item.id==id)
    return res.send(dummyData)
}

module.exports={dataController}