const sequelize=require('../config/connection');
const {Traveller,Location,Trip}=require('../models');
const locationDate=require('./locationseeds.json');
const travellerData=require('./travellerseeds.json');
const Seeds= async()=>{
    await sequelize.sync({force:true}).then(()=>{
        console.log('your data has been seeded namees!!!')
    })
    const locationseeds=await Location.bulkCreate(locationDate);
    const travellerseeds=await Traveller.bulkCreate(travellerData)
    for (let i = 0; i < 9; i++) {
        const { id: randomTravellerEd } = travellerseeds[
          Math.floor(Math.random() * travellerseeds.length)
        ];
        const { id: randomLocationId } = locationseeds[
          Math.floor(Math.random() * locationseeds.length)
        ];
    
        await Trip.create({
            tr_budget: (Math.random() * 10000 + 1000).toFixed(2),
            traveller_number: Math.floor(Math.random() * 10) + 1,
            traveller_id:randomTravellerEd,
          location_id: randomLocationId
        }).catch((err) => {
          // If there's an error, such as the same random pairing of `traveller.id` and `location.id` occurring and we get a constraint error, don't quit the Node process
          console.log(err);
        });
    
      }







    





}
Seeds()


