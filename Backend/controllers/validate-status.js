const Status = require('../models/Status');

// middleware to validate status 
const verifyStatus = async(req, res, next) => {
    try {
        const data = await Status.findOne();
        if (!data.Status) return res.status(401).json({ error: 'Servidor cerrado' })
        next()  
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: 'Servidor cerrado' })
    }
    
    
}

module.exports = verifyStatus;