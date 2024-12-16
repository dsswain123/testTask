const { Sequelize, DataTypes } = require("sequelize");
const { defaultValueSchemable } = require("sequelize/lib/utils");

module.exports = (sequelize,DataTypes) =>{
    const task = sequelize.define("Task",{
        title:{
            type:DataTypes.STRING,
            allowNull :false
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        status:{
            type:DataTypes.ENUM("Pending","InProgress","Completed"),
            defaultValue:"Pending"
        },
        created_by:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        updated_by:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        company_id:{
            type:DataTypes.INTEGER ,
            allownull:false
        }
    })
    Task.associate = (models) =>{
        Task.belongsTo(models.Company,{ foreignKey: 'company_id',as:"company" });
    }
    return Task;
}