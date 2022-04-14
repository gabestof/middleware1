const res = require('express/lib/response');
const fs = require ('fs');
const admins = ["Ada", "Greta", "Bin", "Tim"]



function accessAdmin (req, res, next){
    if (req.query.name) {
        let user = req.query.name;
        user == admins.filter((u) => u == user)
        ? res.send("Hola Admin : " + req.query.name)
        : res.send("No tiene privilegios pars ingresar")
    }
}

   // 
   // if (req.query.name == "Ada") {
        //res.send("Hola Admin : " + req.query.name)
   // } else {
       //res.send("No tienes permitido el acceso")
    //}
//}
        
 




module.exports = accessAdmin;