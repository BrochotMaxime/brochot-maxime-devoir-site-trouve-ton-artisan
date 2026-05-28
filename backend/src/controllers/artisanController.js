const { Op } = require('sequelize');
const { Artisan, Speciality, Category } = require('../models');

// Récupère tous les artisans avec leur spécialité et leur catégorie
exports.getAllArtisans = async (req, res) => {
        try {
                const artisans = await Artisan.findAll({
                        include: {
                                model: Speciality,
                                as: 'specialite',
                                include: {
                                        model: Category,
                                        as: 'categorie',
                                },
                        },
                        order: [['nom_artisan', 'ASC']],
                });

                res.status(200).json(artisans);

        } catch (error) {
                res.status(500).json({
                        message: 'Erreur lors de la récupération des artisans.',
                });
        }
};

// Récupère les trois artisans mis en avant sur la page d'accueil
exports.getTopArtisans = async (req, res) => {
        try {
                const artisans = await Artisan.findAll({
                        where: {
                                top_artisan: true,
                        },
                        include: {
                                model: Speciality,
                                as: 'specialite',
                        },
                        order: [['note_artisan', 'DESC']],
                        limit: 3,
                });

                res.status(200).json(artisans);

        } catch (error) {
                res.status(500).json({
                        message: 'Erreur lors de la récupération des artisans du mois.',
                });
        }
};

// Récupère un artisan spécifique par son ID
exports.getArtisanById = async (req, res) => {
        try {
                const { id } = req.params;

                const artisan = await Artisan.findByPk(id, {
                        include: {
                                model: Speciality,
                                as: 'specialite',
                                include: {
                                        model: Category,
                                        as: 'categorie',
                                },
                        },
                });

                if (!artisan) {
                        return res.status(404).json({
                                message: 'Artisan introuvable.',
                        });
                }

                res.status(200).json(artisan);

        } catch (error) {
                res.status(500).json({
                        message: 'Erreur lors de la récupération de l’artisan.',
                });
        }
};

// Recherche les artisans dont le nom correspond à la requête de recherche
exports.searchArtisans = async (req, res) => {
        try {
                const { name } = req.query;

                if (!name) {
                        return res.status(400).json({
                                message: 'Le paramètre de recherche est requis.',
                        });
                }

                const artisans = await Artisan.findAll({
                        where: {
                                nom_artisan: {
                                        [Op.like]: `%${name}%`,
                                },
                        },
                        include: {
                                model: Speciality,
                                as: 'specialite',
                        },
                        order: [['nom_artisan', 'ASC']],
                });

                res.status(200).json(artisans);

        } catch (error) {
                res.status(500).json({
                        message: 'Erreur lors de la recherche des artisans.',
                });
        }
};