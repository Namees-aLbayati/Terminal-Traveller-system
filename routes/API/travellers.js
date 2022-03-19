const router=require("express").Router();
const {Traveller,Location,Trip}=require('../../models');



router.post('/traveller', async (req, res) => {
    try {
      const travellerData = await Traveller.create(req.body);
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(404).json(err);
    }
  });
  router.get('/traveller', async (req, res) => {
    try {
      const travellerData = await Traveller.findAll({include:[{model:Location,through:Trip,as:'traveller-planned-location'}]});
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(404).json(err);
    }
  });
  router.get('/traveller/:id',async(req,res)=>{
      try{
          const result=await Traveller.findByPk(req.params.id,{
              include:[{model:Location,through:Trip,as:'traveller-planned-location'}]
          });
          res.json(result)

      }catch(err){
          res.json(err)

      }
  })

  router.delete('/traveller/:id',async(req,res)=>{
      try{
          const result=await Traveller.destroy({
              where :{id:req.params.id}
          })
          res.send('DELETED')

      }catch(err){
          res.json(err)
      }
  })
  router.put('/traveller/:id',async(req,res)=>{
      const result=await Traveller.update(req.body,{where:{
id:req.params.id
      }})
      res.send('UPDATED')
  })


  router.post('/location', async (req, res) => {
    try {
      const travellerData = await Location.create(req.body);
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(404).json(err);
    }
  });
  router.get('/location', async (req, res) => {
    try {
      const travellerData = await Location.findAll({
          include:[{model:Traveller,through:Trip,as:'traveller-visit-location'}]
      });
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(404).json(err);
    }
  });



  router.post('/trip', async (req, res) => {
    try {
      const travellerData = await Trip.create(req.body);
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  router.get('/trip', async (req, res) => {
    try {
      const travellerData = await Trip.findAll({
      });
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports=router;
