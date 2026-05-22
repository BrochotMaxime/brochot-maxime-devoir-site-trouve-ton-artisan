const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
        id_categorie: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
        },
        nom_categorie: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true,
        },
}, {
        tableName: 'categorie',
        timestamps: false,
});

module.exports = Category;