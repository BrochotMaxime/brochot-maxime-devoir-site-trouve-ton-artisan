const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Speciality = sequelize.define('Speciality', {
        id_specialite: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
        },
        nom_specialite: {
                type: DataTypes.STRING(50),
                allowNull: false,
        },
        id_categorie: {
                type: DataTypes.INTEGER,
                allowNull: false,
        },
}, {
        tableName: 'specialite',
        timestamps: false,
});

module.exports = Speciality;