const {Model,DataTypes}=require("sequelize");
const sequelize=require("../config/connection");
class Trip extends Model{}
Trip.init({
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    allowNull:false
  },
  tr_budget:{
    type:DataTypes.DECIMAL(10,2),
    allowNull:false
  },
  traveller_number:{
    type:DataTypes.INTEGER,
    allowNull:false,
    defaultValue:1

  },
  location_id:{
    type:DataTypes.INTEGER,
    references:{
      model:"location",
      key:"id",
      unique:false

    }
  },
  traveller_id:{
    type:DataTypes.INTEGER,
    references:{
      model:"traveller",
      key:"id",
      unique:false
    }
  }

},{
  sequelize,
  freezeTableName:true,
  modelName:"trip",
  timestamps:false,
  underscored:true
});
module.exports=Trip;