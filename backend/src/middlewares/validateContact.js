const { body, validationResult } = require('express-validator');

// Valide les données envoyées par le formulaire de contact
const validateContact = [
        body('name')
                .trim()
                .notEmpty()
                .withMessage(`Le nom est obligatoire.`)
                .isLength({ min: 2, max: 100 })
                .withMessage(`Le nom doit contenir entre 2 et 100 caractères.`),

        body('email')
                .trim()
                .notEmpty()
                .withMessage(`L'email est obligatoire.`)
                .isEmail()
                .withMessage(`Le format de l'email est invalide.`)
                .normalizeEmail(),

        body('subject')
                .trim()
                .notEmpty()
                .withMessage(`L'objet est obligatoire.`)
                .isLength({ min: 2, max: 150 })
                .withMessage(`L'objet doit contenir entre 2 et 150 caractères.`),

        body('message')
                .trim()
                .notEmpty()
                .withMessage(`Le message est obligatoire.`)
                .isLength({ min: 10, max: 2000 })
                .withMessage(`Le message doit contenir entre 10 et 2000 caractères.`),

        body('artisanId')
                .notEmpty()
                .withMessage(`L'identifiant de l'artisan est obligatoire.`)
                .isInt({ min: 1 })
                .withMessage(`L'identifiant de l'artisan est invalide.`),

        body('consent')
                .equals('on')
                .withMessage(`Vous devez accepter les Conditions Générales d'Utilisation (CGU).`),

        (req, res, next) => {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                        return res.status(400).json({
                                message: `Les données envoyées sont invalides.`,
                                errors: errors.array(),
                        });
                }

                next();
        },
];

module.exports = validateContact;