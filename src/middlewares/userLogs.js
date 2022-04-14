const fs = require ('fs');

function logMiddleware (req, res, next){
    fs.appendFileSync('./src/logs/userLogs',' Se ingreso en la página' + req.url);
        next();
}


module.exports = logMiddleware;