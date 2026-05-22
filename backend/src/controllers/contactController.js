const { Artisan } = require('../models');

exports.sendContactMessage = async (req, res) => {
        try {
                const { name, email, subject, message, artisanId } = req.body;

                if (!name || !email || !subject || !message || !artisanId) {
                        return res.status(400).json({
                                message: 'Tous les champs sont obligatoires.',
                        });
                }

                const artisan = await Artisan.findByPk(artisanId);

                if (!artisan) {
                        return res.status(404).json({
                                message: 'Artisan introuvable.',
                        });
                }

                console.log('Message de contact reçu :', {
                        to: artisan.email,
                        from: email,
                        name,
                        subject,
                        message,
                });

                res.status(200).json({
                        message: 'Votre message a bien été envoyé.',
                });

        } catch (error) {
                res.status(500).json({
                        message: 'Erreur lors de l’envoi du message.',
                });
        }
};