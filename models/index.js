const Traveller=require("./Traveller");
const Trip=require("./Trip");
const Location=require("./Location");

Traveller.belongsToMany(Location,{
  through:{
    model:Trip,
    unique:false
  },
  as:"traveller-planned-location"
});
Location.belongsToMany(Traveller,{
  through:{
    model:Trip,
    unique:false
  },
  as:"traveller-visit-location"
});
module.exports={Traveller,Trip,Location};

