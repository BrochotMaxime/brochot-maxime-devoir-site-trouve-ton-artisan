const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artisan = sequelize.define('Artisan', {
        id_artisan: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
        },
        nom_artisan: {
                type: DataTypes.STRING(100),
                allowNull: false,
        },
        note_artisan: {
                type: DataTypes.DECIMAL(2, 1),
                allowNull: false,
        },
        ville_artisan: {
                type: DataTypes.STRING(50),
                allowNull: false,
        },
        a_propos: {
                type: DataTypes.TEXT,
        },
        email: {
                type: DataTypes.STRING(100),
                allowNull: false,
        },
        site_web: {
                type: DataTypes.STRING(100),
        },
        image: {
                type: DataTypes.STRING(255),
        },
        top_artisan: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
        },
        id_specialite: {
                type: DataTypes.INTEGER,
                allowNull: false,
        },
}, {
        tableName: 'artisan',
        timestamps: false,
});

module.exports = Artisan;