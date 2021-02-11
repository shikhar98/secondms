const { getHydra } = require('hydra-express');
const he=require('hydra-express')
const express=he.getExpress()
const router=express.Router();
const hydra=he.getHydra()

router.get('/birthday',async (req,res,next)=>{
    const message=hydra.createUMFMessage({
        to:"helloms:[get]/hello/greeting",
        from:"wishesms",
        body:{}
    })
    response=await hydra.makeAPIRequest(message)
    // console.log(response)
    res.send("Happy Birthday! Message from helloms is "+response.msg)
})

module.exports=router