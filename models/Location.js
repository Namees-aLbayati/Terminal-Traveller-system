const {Model,DataTypes}=require('sequelize');
const sequelize=require('../config/connection');
class Location extends Model{};
Location.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,


        
    }
},{
    sequelize,
    modelName:'location',
    freezeTableName:true,
    timestamps:true,
    underscored:true
});
module.exports=Location;