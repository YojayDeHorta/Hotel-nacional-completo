const Status = require('../models/Status');
exports.getStatus= async (req,res)=>{

    try {
        const data = await Status.findOne();       
        res.json({
            error: null,
            data: data.status
        })
    } catch (error) {
        console.log(error);
        res.json({
            error: null,
        })
    }
}
exports.setStatus= async (req,res)=>{

    try {
        const status = await Status.findOne();   
        let data;
        if (!status.status)data = await Status.updateOne({type:'config'},{status:true})
        else data = await Status.updateOne({type:'config'},{status:false})
        res.json({
            error: null,
            data: !status.status
        })
    } catch (error) {
        console.log(error);
        res.json({
            error: 'no se puede agarrar el status',
        })
    }
}