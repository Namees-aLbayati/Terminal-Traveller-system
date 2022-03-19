const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Traveller extends Model {}
Traveller.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    t_name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isEmail:true
        }



    }


},{
    sequelize,
    freezeTableName:true,
    modelName:'traveller',
    timestamps:false,
    underscored:true

});

module.exports=Traveller;