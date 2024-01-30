const poolDB = require("../../utils/conection");


const renderAllCategory = async (req,res,next)=>{
    try{
        let sql = "SELECT * FROM category ORDER BY category"
        let [category] = await poolDB.execute(sql)
        res.render("allCategory", {category})
} catch(error){
    console.log(error);
}};


module.exports =renderAllCategory