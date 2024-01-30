const poolDB = require("./utils/conection");


const categorySQL ="CREATE TABLE category " + 
                    "(id INT(11) NOT NULL AUTO_INCREMENT, " +
                    "category VARCHAR(20) NOT NULL, " +
                    "color VARCHAR(10) NOT NULL, " +
                    "PRIMARY KEY (id));"



const prioritySQL ="CREATE TABLE priority " + 
                    "(id INT(11) NOT NULL AUTO_INCREMENT, " +
                    "priority VARCHAR(20) NOT NULL, " +
                    "color VARCHAR(10) NOT NULL, " +
                    "PRIMARY KEY (id));"



const taskSQL ="CREATE TABLE taskSQL " + 
                    "(id INT(11) NOT NULL AUTO_INCREMENT, " +
                    "title VARCHAR(20) NOT NULL, " +
                    "description TEXT NOT NULL, " +
                    "deadLine DATE NOT NULL, " +
                    "categoryID INT(11) NOT NULL, " +
                    "priorityID INT(11) NOT NULL, " +
                    "isDone BOOLEAN NOT NULL DEFAULT 0, " +
                    "createdAt DATE NOT NULL DEFAULT CURRENT_TIMESTAMP, " +
                    "PRIMARY KEY (id));";
 
 
(function (){
    try{
        [categorySQL,prioritySQL,taskSQL].forEach(async(sql) => {
                await poolDB.execute(sql);
        });
        console.log("Tabele su kreirane");
    } catch(error){
        console.log(error);
    }
})()







// poolDB.execute(categorySQL).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// });


            