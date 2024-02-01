const dayjs = require("dayjs");
const formatDate = (data) =>{
    return dayjs(data).format("DD.MM.YYYY")
}


module.exports ={formatDate}