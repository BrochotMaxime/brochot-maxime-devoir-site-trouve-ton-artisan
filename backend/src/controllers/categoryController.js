const { Category, Speciality, Artisan } = require('../models');


// Récupère toutes les catégories pour alimenter le menu
exports.getAllCategories = async (req, res) => {
        try {
                const categories = await Category.findAll({
                        order: [['nom_categorie', 'ASC']],
                });

                res.status(200).json(categories);

        } catch (error) {
                res.status(500).json({
                        message: 'Erreur lors de la récupération des catégories.',
                });
        }
};

// Récupère une catégorie avec ses spécialités et les artisans associés
exports.getArtisansByCategory = async (req, res) => {
        try {
                const { id } = req.params;

                const category = await Category.findByPk(id, {
                        include: {
                                model: Speciality,
                                as: 'specialites',
                                include: {
                                        model: Artisan,
                                        as: 'artisans',
                                },
                        },
                });

                if (!category) {
                        return res.status(404).json({
                                message: 'Catégorie introuvable.',
                        });
                }

                res.status(200).json(category);
                
        } catch (error) {
                res.status(500).json({
                        message: 'Erreur lors de la récupération des artisans de la catégorie.',
                });
        }
};