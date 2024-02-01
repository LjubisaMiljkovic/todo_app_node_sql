const poolDB = require("../../utils/conection");


const renderAllCategory = async (req,res,next)=>{
    try{
        let sql = `SELECT c.*, COUNT(t.category) AS numberTask
                   FROM category AS c
                   LEFT JOIN tasksql AS t ON t.categoryID = c.id
                   GROUP BY c.id
                   ORDER BY c.category DESC`;

        let category = await poolDB(sql);
        console.log(category);
        res.render("allCategory", {category})
} catch(error){
    next(error);
}};


module.exports =renderAllCategory