const { Sequelize, DataTypes } = require("sequelize");
const { defaultValueSchemable } = require("sequelize/lib/utils");

module.exports = (sequelize,DataTypes) =>{
    const Company = sequelize.define("Company",{

        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        address:{
            type:DataTypes.TEXT,
            allowNull:true
        },
    })
    Company.associate = (models) =>{
        Company.hasMany(models.Task,{
            foreignKey:company_id,
            as:"tasks"
        })

    }
    return Company;
}