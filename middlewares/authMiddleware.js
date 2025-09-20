const admin = require('../data/admin')


const authmiddleware = (req, res, next)=>{

    // users?? 
    // username and password? ??? 
    // header auth 
    const {username , password } = req.headers;
    if(admin.username === username && password === admin.password)
    {
        next();
    }
    else{
        res.status(401).json({message : "Unauthorized"});
    }

};


module.exports = authmiddleware;