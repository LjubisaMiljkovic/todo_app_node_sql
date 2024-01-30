const poolDB = require("../../utils/conection");

const addCategory = async (req,res,next)=>{
    let reqBody = req.body;
    try{
        let sql="INSERT INTO category (category,color) VALUES (:category,:color)";
        let result = await poolDB.execute(sql, reqBody);
        res.redirect("/category/add")
    }catch(error){
        console.log(error);
    }
}

module.exports = addCategory;