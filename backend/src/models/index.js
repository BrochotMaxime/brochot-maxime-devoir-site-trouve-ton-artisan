const Category = require('./category');
const Speciality = require('./speciality');
const Artisan = require('./artisan');

Category.hasMany(Speciality, {
        foreignKey: 'id_categorie',
        as: 'specialites',
});

Speciality.belongsTo(Category, {
        foreignKey: 'id_categorie',
        as: 'categorie',
});

Speciality.hasMany(Artisan, {
        foreignKey: 'id_specialite',
        as: 'artisans',
});

Artisan.belongsTo(Speciality, {
        foreignKey: 'id_specialite',
        as: 'specialite',
});

module.exports = { Category, Speciality, Artisan };