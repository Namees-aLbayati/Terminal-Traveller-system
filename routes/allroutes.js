const router=require('express').Router();
const TravellerAPI=require('./API/travellers');
router.use('/api',TravellerAPI);
module.exports=router;