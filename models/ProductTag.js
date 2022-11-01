// Dependencies 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Manually create model
class ProductTag extends Model {}

ProductTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        product_id: {
            type: DataTypes.STRING,
            allowNull: false,

            //references the product model's id
            references: {
                model: 'product',
                key: 'id'
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,

            //references the tag model's id
            references: {
                model: 'product',
                key: 'id'
            }
        } 
    },
        {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_tag',
        }
);

module.exports = ProductTag;