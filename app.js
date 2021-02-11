const he=require('hydra-express')
const express=he.getExpress()
const api=express.Router()
const router=require('./router')
const config=require('./config.json')

he.init(config,()=>{
    api.use(router);
    he.registerRoutes({"/wish":api})
})