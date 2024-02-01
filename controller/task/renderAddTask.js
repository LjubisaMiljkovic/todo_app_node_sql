
const poolDB = require("../../utils/conection");
const renderAddTask = async (req, res, next) => {
    try {
        let sqlCategory = "SELECT * FROM category";
        let sqlPriority = "SELECT * FROM priority";
        let category = await poolDB(sqlCategory);
        let priority = await poolDB(sqlPriority);
        res.render("addTasks", {category, priority});
    } catch (error) {

    }
};

module.exports = renderAddTask; 



